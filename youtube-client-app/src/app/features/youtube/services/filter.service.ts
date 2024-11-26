import { inject, Injectable, signal } from '@angular/core';
import { SharedService } from 'app/shared/services/shared.service';
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

  // TODO: Восстановить работу фильтра(переехал на сигналы)
  private sharedService = inject(SharedService);

  public toggleView() {
    this.isShowFilter.set(!this.isShowFilter());
  }

  public handleMenubar(str: string) {
    console.log(str);
    switch (str) {
      case 'Date:Ascending':
        this.filterData.set({
          ...this.filterData(),
          filterDate: 'asc',
        });
        break;
      case 'Date:Descending':
        this.filterData.set({
          ...this.filterData(),
          filterDate: 'desc',
        });
        break;
      case 'Views:Ascending':
        this.filterData.set({
          ...this.filterData(),
          filterViews: 'asc',
        });
        break;
      case 'Views:Descending':
        this.filterData.set({
          ...this.filterData(),
          filterViews: 'desc',
        });

        break;
    }
  }

  public showFilterResults() {
    this.sharedService.setFilterTitle(this.filterData().filterTitle);
  }
}
