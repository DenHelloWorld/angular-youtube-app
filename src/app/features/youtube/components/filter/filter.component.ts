import { Component, effect, inject, OnInit } from '@angular/core';
import { FilterService } from 'app/features/youtube/services/filter.service';
import { PRIME_NG_MODULES } from 'app/shared/modules/prime-ng-modules';
import { ANGULAG_MODULES } from 'app/shared/modules/angular-modules';
import { CustomButtonComponent } from '../../../../shared/components/custom-button/custom-button.component';
import { SortOrder, SortOrderType } from '../../models/sort-order.type';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    ANGULAG_MODULES.FormsModule,
    ANGULAG_MODULES.CommonModule,
    PRIME_NG_MODULES.ToolbarModule,
    PRIME_NG_MODULES.InputTextModule,
    CustomButtonComponent,
  ],
  templateUrl: './filter.component.html',
})
export class FilterComponent implements OnInit {
  public filterService = inject(FilterService);

  public isShowFilter = false;

  public filterMode: { date: SortOrderType; views: SortOrderType } = {
    date: null,
    views: null,
  };

  constructor() {
    effect(() => {
      this.isShowFilter = this.filterService.isShowFilter();
    });
  }

  public arrow(order: SortOrderType): string | undefined {
    if (order === null) {
      return 'pi pi-expand';
    }
    return order === SortOrder.ASC ? 'pi pi-angle-up' : 'pi pi-angle-down';
  }

  public hideFilter() {
    this.filterService.isShowFilter.set(false);
  }

  ngOnInit(): void {}

  sortByDate() {
    this.filterMode.views = SortOrder.NONE;

    switch (this.filterMode.date) {
      case SortOrder.NONE:
        this.filterMode.date = SortOrder.ASC;
        this.filterService.handleSort('Date:Ascending');
        break;

      case SortOrder.ASC:
        this.filterMode.date = SortOrder.DESC;
        this.filterService.handleSort('Date:Descending');
        break;

      case SortOrder.DESC:
        this.filterMode.date = SortOrder.NONE;
        this.filterService.handleSort('Date:None');
        break;
    }
  }

  sortByViews() {
    this.filterMode.date = SortOrder.NONE;

    switch (this.filterMode.views) {
      case SortOrder.NONE:
        this.filterMode.views = SortOrder.ASC;
        this.filterService.handleSort('Views:Ascending');
        break;

      case SortOrder.ASC:
        this.filterMode.views = SortOrder.DESC;
        this.filterService.handleSort('Views:Descending');
        break;

      case SortOrder.DESC:
        this.filterMode.views = SortOrder.NONE;
        this.filterService.handleSort('Views:None');
        break;
    }
  }
}
