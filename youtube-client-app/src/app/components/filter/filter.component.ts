import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { FiltService } from './filter.service';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { FieldsetModule } from 'primeng/fieldset';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { CountryService } from './country.service';


// country.model.ts
export interface Country {
  name: string;
  code: string;
}

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [CountryService],
  selector: 'app-filter',
  standalone: true,
  imports: [AutoCompleteModule, MenubarModule, ToolbarModule, CommonModule, FieldsetModule],
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

  countries: Country[] = [];

  selectedCountry: string = '';

  filteredCountries: Country[] = [];

  constructor(public filtService: FiltService, public countryService: CountryService) {}

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
    this.countries = this.countryService.getCountries();
  }

  filterCountry(event: AutoCompleteCompleteEvent) {
    const filtered: Country[] = [];

    const query = event.query;

    for (let i = 0; i < (this.countries as Country[]).length; i++) {
      const country = (this.countries as Country[])[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }
}
