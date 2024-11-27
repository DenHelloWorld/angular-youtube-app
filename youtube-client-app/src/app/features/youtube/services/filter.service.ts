import { Injectable, signal } from '@angular/core';
import { SearchResultsData } from '../models/search-results-data';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public isShowFilter = signal<boolean>(false);

  public filterData = signal<SearchResultsData['filters']>({
    filterTitle: '',
    filterDate: '',
    filterViews: '',
  });

  public toggleView() {
    this.isShowFilter.set(!this.isShowFilter());
  }

  public handleSort(str: string) {
    switch (str) {
      case 'Date:Ascending':
        this.filterData().filterViews = '';
        this.filterData().filterDate = 'asc';
        break;

      case 'Date:Descending':
        this.filterData().filterViews = '';
        this.filterData().filterDate = 'desc';
        break;

      case 'Views:Ascending':
        this.filterData().filterDate = '';
        this.filterData().filterViews = 'asc';
        break;

      case 'Views:Descending':
        this.filterData().filterDate = '';
        this.filterData().filterViews = 'desc';
        break;

      default:
        this.filterData().filterDate = '';
        this.filterData().filterViews = '';
        break;
    }
  }
}
