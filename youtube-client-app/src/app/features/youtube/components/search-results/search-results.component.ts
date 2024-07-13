import { Component, OnDestroy } from '@angular/core';
import { SearchResultsService } from 'app/features/youtube/services/search-results.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export default class SearchResultsComponent implements OnDestroy {
  title: string = 'Search Results';

  constructor(
    public searchResultsService: SearchResultsService,
  ) {}

  ngOnDestroy() {
    this.searchResultsService.destroyListeners();
  }
}
