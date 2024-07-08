import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { FiltService } from './service/filter.service';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { FieldsetModule } from 'primeng/fieldset';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SharedService } from 'app/services/shared.service';
import { Subscription } from 'rxjs';




@Component({
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
  private subscriptions: Subscription[] = [];

  filterItems: MenuItem[] | undefined;

  placeHolder: string = 'Name';

  filterInputValue: string = '';

  constructor(private sharedService: SharedService, public filtService: FiltService) {}

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
    this.subscriptions.push(
      this.sharedService.filterInputValue$.subscribe(value => {
        this.filterInputValue = value;
      }),
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }


  showFilterResults() {
    this.sharedService.setFilterInputValue(this.filterInputValue);
  }
}
