import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { SearchResultsService } from 'app/features/youtube/services/search-results.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
})
export class SearchResultsComponent implements OnDestroy, OnInit {
  public title: string = 'Search Results';

  public searchResultsService = inject(SearchResultsService);

  public ngOnInit() {
    this.searchResultsService.turnOnListeners();
  }

  public ngOnDestroy() {
    this.searchResultsService.destroyListeners();
  }
}
