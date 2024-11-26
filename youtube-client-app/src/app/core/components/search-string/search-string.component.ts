import { FilterService } from './../../../features/youtube/services/filter.service';
import { Component, inject } from '@angular/core';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import { ANGULAG_MODULES } from 'app/shared/modules/angular-modules';
import { PRIME_NG_MODULES } from 'app/shared/modules/prime-ng-modules';
import { SearchService } from '../../../features/youtube/services/search.service';

@Component({
  selector: 'app-search-string',
  templateUrl: './search-string.component.html',
  standalone: true,
  imports: [
    CustomButtonComponent,
    ANGULAG_MODULES.CommonModule,
    ANGULAG_MODULES.FormsModule,
    PRIME_NG_MODULES.MessagesModule,
    PRIME_NG_MODULES.InputTextModule,
  ],
})
export class SearchStringComponent {
  searchText = '';

  public filterService = inject(FilterService);

  public searchService = inject(SearchService);

  search() {
    if (this.searchText.length > 2) {
      setTimeout(() => {
        this.searchService.searchByTitle(this.searchText);
      }, 300);
    }
  }
}
