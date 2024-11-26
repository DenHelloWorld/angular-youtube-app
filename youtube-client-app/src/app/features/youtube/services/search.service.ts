import { effect, inject, Injectable } from '@angular/core';
import { YoutubeService } from './youtube.service';
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
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private router = inject(Router);

  customItems: CustomCard[] = [];

  public SearchResultsData: SearchResultsData = {
    filters: {
      filterTitle: '',
      filterDate: 'asc',
      filterViews: '',
    },
    searchInputHeader: '',
    searchedItems$: this.store.select(selectAllVideosArray),
  };

  public CustomCardsData: CustomCardsData = {
    filters: {
      filterTitle: '',
      filterDate: 'asc',
      filterViews: '',
    },
    searchInputHeader: '',
    customItems$: this.store.select(selectCustomCards),
  };

  constructor(
    private youtubeService: YoutubeService,
    private sharedService: SharedService,
    private store: Store,
  ) {
    this.initializeEffects();
    // this.searchByTitle('RSSchool');
  }

  private initializeEffects() {
    effect(
      () => {
        const data = YoutubeService.videoDetailsByTitleSignal();
        if (data.length > 0) {
          this.store.dispatch(loadYouTubeCardsSuccess({ cards: data }));
        }
      },
      { allowSignalWrites: true },
    );

    effect(
      () => {
        const error = YoutubeService.errorSignal();
        if (error) {
          this.store.dispatch(loadYouTubeCardsFailure({ error }));
        }
      },
      { allowSignalWrites: true },
    );
  }

  public listenSearchResultsData() {
    this.sharedService.setSearchResultsData(this.SearchResultsData);
    this.sharedService.setCustomCardsData(this.CustomCardsData);
  }

  public async searchByTitle(title: string) {
    this.store.dispatch(loadYouTubeCards());
    await this.youtubeService.getByTitle(title);
    this.router.navigate(['/main']);
  }

  public clearCards() {
    this.store.dispatch(clearYouTubeCards());
  }

  getPublishedDate(item: YouTubeVideoDetailsData): string {
    return item.snippet.publishedAt;
  }

  public searchedItems(): void {
    this.searchByTitle(this.SearchResultsData.searchInputHeader);
  }
}
