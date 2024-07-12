import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FiltService } from 'app/features/youtube/services/filter.service';
import { SharedService } from 'app/shared/services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export default class HeaderComponent implements OnInit {
  private subscriptions: Subscription[] = [];

  isFilterShow: boolean;

  searchInputHeader: string = '';

  constructor(
    private filtService: FiltService,
    private sharedService: SharedService,
    private router: Router,
  ) {
    this.isFilterShow = this.filtService.showFilter;
  }

  ngOnInit() {
    this.subscriptions.push(
      this.sharedService.searchInputHeader$.subscribe((value) => {
        this.searchInputHeader = value;
      }),
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  toggleFilterView(): void {
    this.filtService.toggleView();
    this.isFilterShow = this.filtService.showFilter;
  }

  showSearchResults() {
    this.handleSearchString();
    this.router.navigate(['/main']);
  }

  handleSearchString() {
    this.sharedService.setSearchInputHeader(this.searchInputHeader);
  }
}
