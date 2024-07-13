import { Injectable } from '@angular/core';
import { ISearchResultsData } from 'app/features/youtube/models/searchResultsData';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private filterTitle = new BehaviorSubject<string>('');

  private filterDate = new BehaviorSubject<string>('');

  private filterView = new BehaviorSubject<string>('');


  private searchResultsData = new BehaviorSubject<ISearchResultsData>({
    filterTitle: '',
    filterDate: '',
    filterViews: '',
    searchInputHeader: '',
    searchedItems: [],
  });

  filterTitle$ = this.filterTitle.asObservable();

  filterDate$ = this.filterDate.asObservable();

  filterView$ = this.filterView.asObservable();

  searchResultsData$ = this.searchResultsData.asObservable();

  setFilterTitle(value: string) {
    this.filterTitle.next(value);
  }

  setFilterDate(value: string) {
    this.filterDate.next(value);
  }

  setFilterView(value: string) {
    this.filterView.next(value);
  }

  setSearchResultsData(value: ISearchResultsData) {
    this.searchResultsData.next(value);
  }
}
