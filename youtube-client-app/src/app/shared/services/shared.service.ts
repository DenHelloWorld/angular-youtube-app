import { Injectable } from '@angular/core';
import { SearchResultsData } from 'app/features/youtube/models/search-results-data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private filterTitle = new BehaviorSubject<string>('');

  private filterDate = new BehaviorSubject<string>('');

  private filterView = new BehaviorSubject<string>('');

  private detalisId = new BehaviorSubject<string>('');

  private searchResultsData = new BehaviorSubject<SearchResultsData>({
    filterTitle: '',
    filterDate: '',
    filterViews: '',
    searchInputHeader: '',
    searchedItems: [],
  });

  public filterTitle$ = this.filterTitle.asObservable();

  public filterDate$ = this.filterDate.asObservable();

  public filterView$ = this.filterView.asObservable();

  public searchResultsData$ = this.searchResultsData.asObservable();

  public detalisId$ = this.detalisId.asObservable();

  public setFilterTitle(value: string) {
    this.filterTitle.next(value);
  }

  public setFilterDate(value: string) {
    this.filterDate.next(value);
  }

  public setFilterView(value: string) {
    this.filterView.next(value);
  }

  public setSearchResultsData(value: SearchResultsData) {
    this.searchResultsData.next(value);
  }

  public setDetalisId(value: string) {
    this.detalisId.next(value);
  }
}
