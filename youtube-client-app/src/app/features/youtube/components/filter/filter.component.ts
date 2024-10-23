import { Component, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FilterItemsService } from 'app/features/youtube/services/filter-items.service';
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
export class FilterComponent implements OnInit {
  public filterItems: MenuItem[] | undefined;

  public filterService = inject(FilterService);

  private filterItemService = inject(FilterItemsService);

  public ngOnInit() {
    this.filterItems = this.filterItemService.getItems();
  }

  public ngOnDestroy() {
    this.filterService.removeSubscriptions();
  }
}
