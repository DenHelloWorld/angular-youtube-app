import { Injectable } from '@angular/core';
import { SearchResultsData } from 'app/features/youtube/models/search-results-data.interface';
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

  filterTitle$ = this.filterTitle.asObservable();

  public filterDate$ = this.filterDate.asObservable();

  filterView$ = this.filterView.asObservable();

  searchResultsData$ = this.searchResultsData.asObservable();

  detalisId$ = this.detalisId.asObservable();

  public setFilterTitle(value: string) {
    this.filterTitle.next(value);
  }

  public setFilterDate(value: string) {
    this.filterDate.next(value);
  }

  setFilterView(value: string) {
    this.filterView.next(value);
  }

  setSearchResultsData(value: SearchResultsData) {
    this.searchResultsData.next(value);
  }

  setDetalisId(value: string) {
    this.detalisId.next(value);
  }
}
