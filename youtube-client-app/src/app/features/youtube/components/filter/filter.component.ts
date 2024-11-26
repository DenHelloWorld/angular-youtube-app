import { Component, effect, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FilterService } from 'app/features/youtube/services/filter.service';
import { PRIME_NG_MODULES } from 'app/shared/modules/prime-ng-modules';
import { ANGULAG_MODULES } from 'app/shared/modules/angular-modules';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    ANGULAG_MODULES.FormsModule,
    ANGULAG_MODULES.CommonModule,
    PRIME_NG_MODULES.MenubarModule,
    PRIME_NG_MODULES.ToolbarModule,
    PRIME_NG_MODULES.FieldsetModule,
    PRIME_NG_MODULES.InputTextModule,
    PRIME_NG_MODULES.SidebarModule,
  ],
  templateUrl: './filter.component.html',
})
export class FilterComponent {
  public filterService = inject(FilterService);

  public isShowFilter = false;

  constructor() {
    effect(() => {
      this.isShowFilter = this.filterService.isShowFilter();
    });
  }

  public hideFilter() {
    this.filterService.isShowFilter.set(false);
  }

  public getItems(): MenuItem[] {
    return [
      {
        label: 'Date',
        icon: 'pi pi-calendar-clock',
        items: [
          {
            label: 'Ascending',
            icon: 'pi pi-calendar-plus',
            command: () => this.filterService.handleMenubar('Date:Ascending'),
          },
          {
            label: 'Descending',
            icon: 'pi pi-calendar-minus',
            command: () => this.filterService.handleMenubar('Date:Descending'),
          },
        ],
      },
      {
        label: 'Views',
        icon: 'pi pi-eye',
        items: [
          {
            label: 'Ascending',
            icon: 'pi pi-arrow-circle-up',
            command: () => this.filterService.handleMenubar('Views:Ascending'),
          },
          {
            label: 'Descending',
            icon: 'pi pi-arrow-circle-down',
            command: () => this.filterService.handleMenubar('Views:Descending'),
          },
        ],
      },
    ];
  }
}
