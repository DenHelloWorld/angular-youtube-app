import { Injectable } from '@angular/core';
import { YoutubeService } from './youtube.service';
import {
  Item,
  IYouTubeVideoListResponse,
} from '../models/youtube-response.model';
import { SharedService } from 'app/shared/services/shared.service';
import { Subscription } from 'rxjs';
import { SearchResultsData } from '../models/searchResultsData';
import { DetalisService } from './detalis.service';

@Injectable({
  providedIn: 'root',
})
export class SearchResultsService {
  private subscriptions: Subscription[];

  private mockItems: Item[] = [];

  SearchResultsData: SearchResultsData = {
    filterTitle: '',
    filterDate: '',
    filterViews: '',
    searchInputHeader: '',
    searchedItems: [],
  };

  constructor(
    private youtubeService: YoutubeService,
    private sharedService: SharedService,
    private detalisService: DetalisService,
  ) {
    this.subscriptions = [];
    this.getAllYoutubeItems();
    this.handleFiltersChange();
    this.allOrSearchedItems();
  }

  private getAllYoutubeItems() {
    this.youtubeService
      .getAll()
      .subscribe((response: IYouTubeVideoListResponse) => {
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
      this.youtubeService.getByTitle(title);
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
