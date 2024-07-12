import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/shared/services/shared.service';
import { Subscription } from 'rxjs';
import { Item } from 'app/features/youtube/models/youtube-response.model';
import { SearchResultsService } from 'app/features/youtube/services/search-results.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export default class SearchResultsComponent implements OnInit {
  private subscriptions: Subscription[] = [];

  title: string = 'Search Results';

  filterTitle: string = '';

  filterDate: string = '';

  filterViews: string = '';

  searchInputHeader: string = '';

  searchedItems: Item[] = [];

  constructor(
    private sharedService: SharedService,
    private searchResultsService: SearchResultsService,
  ) {}

  ngOnInit() {
    this.sharedService.filterTitle$.subscribe((value) => {
      this.filterTitle = value;
    });
    this.sharedService.filterDate$.subscribe((value) => {
      this.filterDate = value;
    });
    this.sharedService.filterView$.subscribe((value) => {
      this.filterViews = value;
    });
    this.sharedService.searchInputHeader$.subscribe((value) => {
      this.searchInputHeader = value;
      this.updateSearchResults();
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  private updateSearchResults() {
    if (this.searchInputHeader.trim() === '') {
      this.searchResultsService.searchedItems =
        this.searchResultsService.allItems;
    } else {
      this.searchResultsService.search(this.searchInputHeader);
    }
    this.searchedItems = this.searchResultsService.searchedItems;
  }
}
