import { inject, Injectable } from '@angular/core';
import { SharedService } from 'app/shared/services/shared.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private subscriptions: Subscription[] = [];

  public showFilter: boolean = false;

  public filterTitle: string = '';

  public filterDate: string = '';

  public filterViews: string = '';

  private sharedService = inject(SharedService);

  public toggleView() {
    this.showFilter = !this.showFilter;
  }

  public turnOnSubscriptions() {
    this.subscriptions.push(
      this.sharedService.filterTitle$.subscribe(value => {
        this.filterTitle = value;
      }),
    );
    this.subscriptions.push(
      this.sharedService.filterDate$.subscribe(value => {
        this.filterDate = value;
      }),
    );
    this.subscriptions.push(
      this.sharedService.filterView$.subscribe(value => {
        this.filterViews = value;
      }),
    );
  }

  public removeSubscriptions() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  public handleMenubar(str: string) {
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

  public showFilterResults() {
    this.sharedService.setFilterTitle(this.filterTitle);
  }
}
