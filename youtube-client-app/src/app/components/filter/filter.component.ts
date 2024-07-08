import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { FiltService } from './service/filter.service';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { FieldsetModule } from 'primeng/fieldset';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CountryService } from './service/country.service';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';


// country.model.ts
export interface Country {
  name: string;
  code: string;
}

@Component({
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [CountryService],
  selector: 'app-filter',
  standalone: true,
  imports: [AutoCompleteModule, MenubarModule, ToolbarModule, CommonModule, FieldsetModule, FormsModule, InputTextModule],
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

  filterInputValue: string = '';

  constructor(public filtService: FiltService) {}

  get isVisible() {
    return this.filtService.showFilter;
  }

  ngOnInit() {
    this.filterItems = [
      {
        label: 'Date',
        icon: 'pi pi-calendar-clock',
        items: [
          {
            label: 'Ascending',
            icon: 'pi pi-calendar-plus',
          },
          {
            label: 'Descending',
            icon: 'pi pi-calendar-minus',
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
          },
          {
            label: 'Descending',
            icon: 'pi pi-arrow-circle-down',
          },
        ],
      },
    ];
  }

  showFilterResults() {
    console.log(this.filterInputValue);
  }

  private updateFilterhResults() {
    if (this.filterInputValue.trim() === '') {
      
    } else {

    }
  }
}
