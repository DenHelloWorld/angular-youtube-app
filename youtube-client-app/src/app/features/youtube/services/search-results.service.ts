import { Injectable } from '@angular/core';
import { YoutubeService } from './youtube.service';
import {
  Item,
  YouTubeVideoListResponse,
} from '../models/youtube-response.model';
import { SharedService } from 'app/shared/services/shared.service';
import { Subscription } from 'rxjs';
import { ISearchResultsData } from '../models/searchResultsData';

@Injectable({
  providedIn: 'root',
})
export class SearchResultsService {
  private subscriptions: Subscription[];

  private mockItems: Item[] = [];

  SearchResultsData: ISearchResultsData = {
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
    this.getAllYoutubeItems();
    this.handleFiltersChange();
    this.allOrSearchedItems();
  }

  private getAllYoutubeItems() {
    this.youtubeService
      .getAll()
      .subscribe((response: YouTubeVideoListResponse) => {
        this.mockItems = response.items;
      });
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

  listenSearchResultsData() {
    this.sharedService.setSearchResultsData(this.SearchResultsData);
  }

  get allItems() {
    return this.mockItems;
  }

  destroyListeners() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  searchByTitle(title: string) {
    this.SearchResultsData.searchedItems =
      this.youtubeService.getMatching(title);
  }

  allOrSearchedItems(): Item[] {
    if (this.SearchResultsData.searchInputHeader.trim() === '') {
      this.SearchResultsData.searchedItems = this.allItems;
    } else {
      this.searchByTitle(this.SearchResultsData.searchInputHeader);
    }
    return this.SearchResultsData.searchedItems;
  }
}
