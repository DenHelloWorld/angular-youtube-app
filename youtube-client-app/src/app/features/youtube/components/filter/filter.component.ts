import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { FieldsetModule } from 'primeng/fieldset';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FiltService } from '../../services/filter.service';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    AutoCompleteModule,
    MenubarModule,
    ToolbarModule,
    CommonModule,
    FieldsetModule,
    FormsModule,
    InputTextModule,
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  animations: [
    trigger('filterSlide', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('0.1s', style({ transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('0.1s', style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
})
export default class FilterComponent implements OnInit {
  filterItems: MenuItem[] | undefined;

  placeHolder: string = 'Name';

  constructor(public filtService: FiltService) {}

  ngOnInit() {
    this.filterItems = [
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

  ngOnDestroy() {
    this.filtService.removeSubscriptions();
  }
}
