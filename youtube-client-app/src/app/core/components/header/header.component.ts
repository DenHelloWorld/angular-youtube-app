import { Component } from '@angular/core';
import { FiltService } from 'app/features/youtube/services/filter.service';
import { SearchResultsService } from 'app/features/youtube/services/search-results.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export default class HeaderComponent {
  isFilterShow: boolean;

  searchInputValue = '';

  constructor(
    private filtService: FiltService,
    private searchResultService: SearchResultsService,
  ) {
    this.isFilterShow = this.filtService.showFilter;
  }

  toggleFilterView(): void {
    this.filtService.toggleView();
    this.isFilterShow = this.filtService.showFilter;
  }

  showSearchResults() {
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
