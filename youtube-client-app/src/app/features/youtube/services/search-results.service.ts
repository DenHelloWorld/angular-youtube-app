import { Injectable } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { Observable, Subscription } from 'rxjs';
import { SharedService } from 'app/shared/services/shared.service';
import {
  CustomCardsData,
  SearchResultsData,
} from 'app/features/youtube/models/search-results-data';
import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';
import { Store } from '@ngrx/store';
import {
  clearYouTubeCards,
  loadYouTubeCards,
  loadYouTubeCardsFailure,
  loadYouTubeCardsSuccess,
} from 'app/redux/actions/youtube-card.actions';
import { selectCustomCards } from 'app/redux/selectors/custom-card.selectors';
import { CustomCard } from 'app/features/youtube/models/custom-card.interface';
import { selectAllVideosArray } from 'app/redux/selectors/youtube-card.selectors';

@Injectable({
  providedIn: 'root',
})
export class SearchResultsService {
  private subscriptions: Subscription[];

  customItems$: Observable<CustomCard[]> = new Observable<CustomCard[]>();

  customItems: CustomCard[] = [];

  searchedItems$: Observable<YouTubeVideoDetailsData[]> =
    this.store.select(selectAllVideosArray);

  public SearchResultsData: SearchResultsData = {
    filters: {
      filterTitle: '',
      filterDate: 'asc',
      filterViews: '',
      searchInputHeader: '',
    },
    searchedItems$: this.store.select(selectAllVideosArray),
  };

  public CustomCardsData: CustomCardsData = {
    filters: {
      filterTitle: '',
      filterDate: 'asc',
      filterViews: '',
      searchInputHeader: '',
    },
    customItems$: this.store.select(selectCustomCards),
  };

  constructor(
    private youtubeService: YoutubeService,
    private sharedService: SharedService,
    private store: Store,
  ) {
    this.subscriptions = [];
    // this.searchByTitle('RSSchool');
  }

  public turnOnListeners() {
    this.sharedService.filterTitle$.subscribe((value) => {
      this.SearchResultsData.filters.filterTitle = value;
      this.CustomCardsData.filters.filterTitle = value;
      this.listenSearchResultsData();
    });
    this.sharedService.filterDate$.subscribe((value) => {
      this.SearchResultsData.filters.filterDate = value;
      this.CustomCardsData.filters.filterDate = value;
      this.listenSearchResultsData();
    });
    this.sharedService.filterView$.subscribe((value) => {
      this.SearchResultsData.filters.filterViews = value;
      this.CustomCardsData.filters.filterViews = value;
      this.listenSearchResultsData();
    });
    this.subscriptions.push(
      this.sharedService.searchResultsData$.subscribe((value) => {
        this.SearchResultsData = value;
      }),
      this.CustomCardsData.customItems$.subscribe((items) => {
        this.customItems = items;
      }),
    );
  }

  public listenSearchResultsData() {
    this.sharedService.setSearchResultsData(this.SearchResultsData);
    this.sharedService.setCustomCardsData(this.CustomCardsData);
  }

  public destroyListeners() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  public searchByTitle(title: string) {
    this.store.dispatch(loadYouTubeCards());

    this.youtubeService.getByTitle(title).subscribe(
      (data: YouTubeVideoDetailsData[]) => {
        this.store.dispatch(loadYouTubeCardsSuccess({ cards: data }));
      },
      (error) => {
        this.store.dispatch(loadYouTubeCardsFailure({ error: error.message }));
      },
    );
  }

  public clearCards() {
    this.store.dispatch(clearYouTubeCards());
  }

  getPublishedDate(item: YouTubeVideoDetailsData): string {
    return item.snippet.publishedAt;
  }

  public searchedItems(): void {
    this.searchByTitle(this.SearchResultsData.filters.searchInputHeader);
  }
}
