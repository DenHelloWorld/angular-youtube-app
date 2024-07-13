import { Injectable } from '@angular/core';
import { SharedService } from 'app/shared/services/shared.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FiltService {
  subscriptions: Subscription[] = [];

  showFilter: boolean = false;

  filterInputData: string = '';

  filterTitle: string = '';

  filterDate: string = '';

  filterViews: string = '';

  toggleView() {
    this.showFilter = !this.showFilter;
  }

  constructor(private sharedService: SharedService) {}

  turnOnSubscriptions() {
    this.subscriptions.push(
      this.sharedService.filterTitle$.subscribe((value) => {
        this.filterTitle = value;
      }),
    );
    this.subscriptions.push(
      this.sharedService.filterDate$.subscribe((value) => {
        this.filterDate = value;
      }),
    );
    this.subscriptions.push(
      this.sharedService.filterView$.subscribe((value) => {
        this.filterViews = value;
      }),
    );
  }

  removeSubscriptions() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  handleMenubar(str: string) {
    switch (str) {
      case 'Date:Ascending':
        this.filterDate = 'asc';
        this.sharedService.setFilterDate(this.filterDate);
        break;
      case 'Date:Descending':
        this.filterDate = 'desc';
        this.sharedService.setFilterDate(this.filterDate);
        break;
      case 'Views:Ascending':
        this.filterViews = 'asc';
        this.sharedService.setFilterView(this.filterViews);
        break;
      case 'Views:Descending':
        this.filterViews = 'desc';
        this.sharedService.setFilterView(this.filterViews);
        break;
    }
  }

  showFilterResults() {
    this.sharedService.setFilterTitle(this.filterTitle);
  }
}
