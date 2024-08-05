import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  CustomCardsData,
  SearchResultsData,
} from 'app/features/youtube/models/search-results-data';
import { selectCustomCards } from 'app/redux/selectors/custom-card.selectors';
import { selectYoutubeCards } from 'app/redux/selectors/youtube-card.selectors';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private store: Store) {}

  private filterTitle = new BehaviorSubject<string>('');

  private filterDate = new BehaviorSubject<string>('');

  private filterView = new BehaviorSubject<string>('');

  private detalisId = new BehaviorSubject<string>('');

  private searchResultsData = new BehaviorSubject<SearchResultsData>({
    filters: {
      filterTitle: '',
      filterDate: 'asc',
      filterViews: '',
      searchInputHeader: '',
    },
    searchedItems$: this.store.select(selectYoutubeCards),
  });

  private customCardsData = new BehaviorSubject<CustomCardsData>({
    filters: {
      filterTitle: '',
      filterDate: 'asc',
      filterViews: '',
      searchInputHeader: '',
    },
    customItems$: this.store.select(selectCustomCards),
  });

  public filterTitle$ = this.filterTitle.asObservable();

  public filterDate$ = this.filterDate.asObservable();

  public filterView$ = this.filterView.asObservable();

  public searchResultsData$ = this.searchResultsData.asObservable();

  public customCardsData$ = this.customCardsData.asObservable();

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

  public setCustomCardsData(value: CustomCardsData) {
    this.customCardsData.next(value);
  }

  public setDetalisId(value: string) {
    this.detalisId.next(value);
  }
}
