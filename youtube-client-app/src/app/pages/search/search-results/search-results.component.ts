import { Component, AfterViewInit, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CardModule } from 'primeng/card';
import { SearchResultsService } from './service/search-results.service';
import { CommonModule } from '@angular/common';
import { Item } from 'app/interfaces/youtube-response.interface';
import SearchItemComponent from '../search-item/search-item.component';
import { FilterByTitlePipe } from 'app/components/filter/pipe/filterByTitle.pipe';
import { SharedService } from 'app/services/shared.service';
import { Subscription } from 'rxjs';
import { FilterByDatePipe } from 'app/components/filter/pipe/filterByDate.pipe';
import { FilterByViewsPipe } from 'app/components/filter/pipe/filterByViews.pipe';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [FilterByViewsPipe, FilterByDatePipe, FilterByTitlePipe, CommonModule, CardModule, ScrollPanelModule, SearchItemComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class SearchResultsComponent implements AfterViewInit, OnInit {
  private subscriptions: Subscription[] = [];

  filterTitle: string = '';

  filterDate: string = '';

  filterViews: string = '';

  constructor(private sharedService: SharedService, private searchResultsService: SearchResultsService) {}

  get isVisible(): boolean {
    return this.searchResultsService.showSearchResults;
  }

  ngOnInit() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    this.sharedService.filterTitle$ .subscribe(value => {
      this.filterTitle = value;
      console.log(this.filterTitle);
    });
    this.sharedService.filterDate$ .subscribe(value => {
      this.filterDate = value;
      console.log('date', this.filterDate);
    });
    this.sharedService.filterView$.subscribe(value => {
      this.filterViews = value;
      console.log('view', this.filterViews);
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
