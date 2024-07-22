import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FiltService } from './filter.service';

@Injectable({
  providedIn: 'root',
})
export class FilterItemsService {
  constructor(private filtService: FiltService) {}

  public getItems(): MenuItem[] {
    return [
      {
        label: 'Date',
        icon: 'pi pi-calendar-clock',
        items: [
          {
            label: 'Ascending',
            icon: 'pi pi-calendar-plus',
            command: () => this.filtService.handleMenubar('Date:Ascending'),
          },
          {
            label: 'Descending',
            icon: 'pi pi-calendar-minus',
            command: () => this.filtService.handleMenubar('Date:Descending'),
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
            command: () => this.filtService.handleMenubar('Views:Ascending'),
          },
          {
            label: 'Descending',
            icon: 'pi pi-arrow-circle-down',
            command: () => this.filtService.handleMenubar('Views:Descending'),
          },
        ],
      },
    ];
  }
}
