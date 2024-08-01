import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from 'app/features/youtube/services/filter.service';
import { SearchResultsService } from 'app/features/youtube/services/search-results.service';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchStringService {
  public searchInputHeader: string = '';

  private searchSubject = new Subject<string>();

  private subscription?: Subscription;

  constructor(
    public filterService: FilterService,
    private router: Router,
    private searchResultService: SearchResultsService,
  ) {}

  public turnOnSubscriptions() {
    this.subscription = this.searchSubject
      .pipe(
        debounceTime(300),
        filter((value: string) => value.length >= 3),
      )
      .subscribe((value: string) => {
        this.searchInputHeader = value;
        this.showSearchResults();
      });
  }

  public turnOffSubscriptions() {
    this.subscription?.unsubscribe();
  }

  public updateSearchInput(value: string) {
    this.searchSubject.next(value);
  }

  public showSearchResults() {
    this.handleSearchString();
    this.router.navigate(['/main']);
  }

  public handleSearchString() {
    this.searchResultService.SearchResultsData.searchInputHeader =
      this.searchInputHeader;
    this.searchResultService.searchedItems();
    this.searchResultService.listenSearchResultsData();
  }
}
