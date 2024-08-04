import { Injectable } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { Subscription } from 'rxjs';
import { SharedService } from 'app/shared/services/shared.service';
import { SearchResultsData } from 'app/features/youtube/models/search-results-data';
import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';
import { Store } from '@ngrx/store';
import { clearYouTubeCards, loadYouTubeCards, loadYouTubeCardsFailure, loadYouTubeCardsSuccess } from 'app/redux/actions/youtube-cards.actions';

@Injectable({
  providedIn: 'root',
})
export class SearchResultsService {
  private subscriptions: Subscription[];

  public SearchResultsData: SearchResultsData = {
    filterTitle: '',
    filterDate: '',
    filterViews: '',
    searchInputHeader: '',
    searchedItems: [],
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
      this.SearchResultsData.filterTitle = value;
      this.listenSearchResultsData();
    });
    this.sharedService.filterDate$.subscribe((value) => {
      this.SearchResultsData.filterDate = value;
      this.listenSearchResultsData();
    });
    this.sharedService.filterView$.subscribe((value) => {
      this.SearchResultsData.filterViews = value;
      this.listenSearchResultsData();
    });
    this.subscriptions.push(
      this.sharedService.searchResultsData$.subscribe((value) => {
        this.SearchResultsData = value;
      }),
    );
  }

  public listenSearchResultsData() {
    this.sharedService.setSearchResultsData(this.SearchResultsData);
  }

  public destroyListeners() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  public searchByTitle(title: string) {
    this.store.dispatch(loadYouTubeCards());

    this.youtubeService.getByTitle(title).subscribe(
      (data: YouTubeVideoDetailsData[]) => {
        this.SearchResultsData.searchedItems = data;
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

  public searchedItems(): YouTubeVideoDetailsData[] {
    this.searchByTitle(this.SearchResultsData.searchInputHeader);
    return this.SearchResultsData.searchedItems;
  }
}
