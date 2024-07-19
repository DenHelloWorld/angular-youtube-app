import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/features/auth/services/auth.service';
import { FiltService } from 'app/features/youtube/services/filter.service';
import { SearchResultsService } from 'app/features/youtube/services/search-results.service';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  searchInputHeader: string = '';

  constructor(
    public filtService: FiltService,
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
