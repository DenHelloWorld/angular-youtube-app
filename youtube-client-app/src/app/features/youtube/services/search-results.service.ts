import { Injectable } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { Subscription } from 'rxjs';
import { SharedService } from 'app/shared/services/shared.service';
import { SearchResultsData } from 'app/features/youtube/models/search-results-data';
import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';

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
  ) {
    this.subscriptions = [];
    this.handleFiltersChange();
    // this.allOrSearchedItems();
  }

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

  public destroyListeners() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  searchByTitle(title: string) {
    this.youtubeService
      .getByTitle(title)
      .subscribe((data: YouTubeVideoDetailsData[]) => {
        this.SearchResultsData.searchedItems = data;
      });
  }

  public allOrSearchedItems(): YouTubeVideoDetailsData[] {
    this.searchByTitle(this.SearchResultsData.searchInputHeader);
    // console.log(this.SearchResultsData.searchedItems);

    return this.SearchResultsData.searchedItems;
  }
}
