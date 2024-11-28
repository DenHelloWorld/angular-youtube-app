import { Component, inject } from '@angular/core';
import { SearchService } from 'app/features/youtube/services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
})
export class SearchResultsComponent  {
  public title: string = 'Search Results';

  public searchService = inject(SearchService);

}
