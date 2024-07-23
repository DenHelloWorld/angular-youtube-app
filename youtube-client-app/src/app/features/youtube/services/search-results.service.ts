import { Injectable } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { Subscription } from 'rxjs';
import { SharedService } from 'app/shared/services/shared.service';
import { SearchResultsData } from 'app/features/youtube/models/search-results-data';
import { YouTubeVideoData } from 'app/features/youtube/models/youtube-video-data.interface';
import { DetailsService } from 'app/features/youtube/services/details.service';

@Injectable({
  providedIn: 'root',
})
export class SearchResultsService {
  private subscriptions: Subscription[];

  private mockItems: YouTubeVideoData[] = [];

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
    private detailsService: DetailsService,
  ) {
    this.subscriptions = [];
    // this.getAllYoutubeItems();
    this.handleFiltersChange();
    this.allOrSearchedItems();
  }

  // private getAllYoutubeItems() {
  //   this.youtubeService.getAll().subscribe((response: YouTubeResponse) => {
  //     this.mockItems = response.items;
  //   });
  // }

  private handleFiltersChange() {
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

  public get allItems() {
    return this.mockItems;
  }

  public destroyListeners() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  searchByTitle(title: string) {
    this.youtubeService
      .getByTitle(title)
      .subscribe((data: YouTubeVideoData[]) => {
        this.SearchResultsData.searchedItems = data;
      });
  }

  public allOrSearchedItems(): YouTubeVideoData[] {
    if (this.SearchResultsData.searchInputHeader.trim() === '') {
      this.SearchResultsData.searchedItems = this.allItems;
    } else {
      this.searchByTitle(this.SearchResultsData.searchInputHeader);
    }
    return this.SearchResultsData.searchedItems;
  }
}
