import { Component, AfterViewInit } from '@angular/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CardModule } from 'primeng/card';
import { SearchResultsService } from './service/search-results.service';
import { CommonModule } from '@angular/common';
import { Item } from 'app/interfaces/youtube-response.interface';
import SearchItemComponent from '../search-item/search-item.component';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, CardModule, ScrollPanelModule, SearchItemComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export default class SearchResultsComponent implements AfterViewInit {

  constructor(private searchResultsService: SearchResultsService) {}

  get isVisible(): boolean {
    return this.searchResultsService.showSearchResults;
  }

  ngAfterViewInit() {
  }

  get searchedItems(): Item[] {
    return this.searchResultsService.searchedItems;
  }

  // get allItems(): Item[] {
  //   return this.searchResultsService.allItems;
  // }

}
