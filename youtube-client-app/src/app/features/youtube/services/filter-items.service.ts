import { Injectable } from '@angular/core';
import { FilterService } from 'app/features/youtube/services/filter.service';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class FilterItemsService {
  constructor(private filterService: FilterService) {}

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
