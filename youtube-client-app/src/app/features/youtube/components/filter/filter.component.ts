import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { FilterItemsService } from 'app/features/youtube/services/filter-items.service';
import { FiltService } from 'app/features/youtube/services/filter.service';

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
    SidebarModule,
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export default class FilterComponent implements OnInit {
  public filterItems: MenuItem[] | undefined;

  public placeHolder: string = 'Name';

  constructor(public filtService: FiltService, private filtItemService: FilterItemsService) {}

  public ngOnInit() {
    this.filterItems = this.filtItemService.getItems();
  }

  public ngOnDestroy() {
    this.filtService.removeSubscriptions();
  }
}
