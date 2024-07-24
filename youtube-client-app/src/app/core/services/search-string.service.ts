import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/features/auth/services/auth.service';
import { FilterService } from 'app/features/youtube/services/filter.service';
import { SearchResultsService } from 'app/features/youtube/services/search-results.service';

@Injectable({
  providedIn: 'root',
})
export class SearchStringService {
  public searchInputHeader: string = '';

  constructor(
    public filterService: FilterService,
    private router: Router,
    private searchResultService: SearchResultsService,
    public authService: AuthService,
  ) {}

  public showSearchResults() {
    this.handleSearchString();
    this.router.navigate(['/main']);
  }

  public handleSearchString() {
    this.searchResultService.SearchResultsData.searchInputHeader =
      this.searchInputHeader;
    this.searchResultService.allOrSearchedItems();
    this.searchResultService.listenSearchResultsData();
  }
}
