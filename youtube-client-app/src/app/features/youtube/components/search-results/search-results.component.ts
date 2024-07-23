import { Component, OnDestroy } from '@angular/core';
import { SearchResultsService } from 'app/features/youtube/services/search-results.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
})
export default class SearchResultsComponent implements OnDestroy {
  public title: string = 'Search Results';

  constructor(public searchResultsService: SearchResultsService) {}

  public ngOnDestroy() {
    this.searchResultsService.destroyListeners();
  }
}
