import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private filterTitle = new BehaviorSubject<string>('');

  private filterDate = new BehaviorSubject<string>('');

  private filterView = new BehaviorSubject<string>('');

  private searchInputHeader = new BehaviorSubject<string>('');

  filterTitle$ = this.filterTitle.asObservable();

  filterDate$ = this.filterDate.asObservable();

  filterView$ = this.filterView.asObservable();

  searchInputHeader$ = this.searchInputHeader.asObservable();

  setFilterTitle(value: string) {
    this.filterTitle.next(value);
  }

  setFilterDate(value: string) {
    this.filterDate.next(value);
  }

  setFilterView(value: string) {
    this.filterView.next(value);
  }

  setSearchInputHeader(value: string) {
    this.searchInputHeader.next(value);
  }
}
