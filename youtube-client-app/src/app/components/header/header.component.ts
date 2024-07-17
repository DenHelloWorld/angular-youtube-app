import { SearchResultsService } from './../../pages/search/search-results/service/search-results.service';
import { Component, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { AvatarModule } from 'primeng/avatar';
import FilterComponent from '../filter/filter.component';
import { FiltService } from '../filter/service/filter.service';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ToolbarModule,
    CustomButtonComponent,
    SplitButtonModule,
    InputTextModule,
    DropdownModule,
    AvatarModule,
    FilterComponent,
    FormsModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class HeaderComponent {
  public isFilterShow: boolean;

  public searchInputValue = '';

  constructor(
    private filtService: FiltService,
    private searchResultService: SearchResultsService,
  ) {
    this.isFilterShow = this.filtService.showFilter;
  }

  public toggleFilterView(): void {
    this.filtService.toggleView();
    this.isFilterShow = this.filtService.showFilter;
  }

  public showSearchResults() {
    this.updateSearchResults();
    this.searchResultService.setView(true);
  }

  private updateSearchResults() {
    if (this.searchInputValue.trim() === '') {
      this.searchResultService.searchedItems =
        this.searchResultService.allItems;
    } else {
      this.searchResultService.search(this.searchInputValue);
    }
  }
}
