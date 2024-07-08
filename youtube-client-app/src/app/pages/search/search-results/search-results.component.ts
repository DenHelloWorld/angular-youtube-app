import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CardModule } from 'primeng/card';
import { SearchResultsService } from './service/search-results.service';
import { CommonModule } from '@angular/common';
import { Item } from 'app/interfaces/youtube-response.interface';
import SearchItemComponent from '../search-item/search-item.component';
import { FilterByTitlePipe } from 'app/components/filter/pipe/filterByTitle.pipe';
import { SharedService } from 'app/services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [FilterByTitlePipe, CommonModule, CardModule, ScrollPanelModule, SearchItemComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export default class SearchResultsComponent implements AfterViewInit, OnInit {
  private subscriptions: Subscription[] = [];

  // filterByTitle pipe
  filterInputValue: string = '';

  constructor(private sharedService: SharedService, private searchResultsService: SearchResultsService) {}

  get isVisible(): boolean {
    return this.searchResultsService.showSearchResults;
  }

  ngOnInit() {
    this.sharedService.filterInputValue$.subscribe(value => {
      this.filterInputValue = value;
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  ngAfterViewInit() {
  }

  get searchedItems(): Item[] {
    return this.searchResultsService.searchedItems;
  }
}
