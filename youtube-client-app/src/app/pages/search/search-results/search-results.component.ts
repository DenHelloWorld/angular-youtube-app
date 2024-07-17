import { Component, OnInit } from '@angular/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CardModule } from 'primeng/card';
import { SearchResultsService } from './service/search-results.service';
import { CommonModule } from '@angular/common';
import SearchItemComponent from '../search-item/search-item.component';
import { FilterByTitlePipe } from 'app/components/filter/pipe/filterByTitle.pipe';
import { SharedService } from 'app/services/shared.service';
import { Subscription } from 'rxjs';
import { FilterByDatePipe } from 'app/components/filter/pipe/filterByDate.pipe';
import { FilterByViewsPipe } from 'app/components/filter/pipe/filterByViews.pipe';
import { YouTubeVideoData } from 'app/interfaces/youtube-video-data.interface';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [
    FilterByViewsPipe,
    FilterByDatePipe,
    FilterByTitlePipe,
    CommonModule,
    CardModule,
    ScrollPanelModule,
    SearchItemComponent,
  ],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export default class SearchResultsComponent implements OnInit {
  private subscriptions: Subscription[] = [];

  public filterTitle: string = '';

  public filterDate: string = '';

  public filterViews: string = '';

  constructor(
    private sharedService: SharedService,
    private searchResultsService: SearchResultsService,
  ) {}

  public get isVisible(): boolean {
    return this.searchResultsService.showSearchResults;
  }

  public ngOnInit() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    this.sharedService.filterTitle$.subscribe((value) => {
      this.filterTitle = value;
    });
    this.sharedService.filterDate$.subscribe((value) => {
      this.filterDate = value;
    });
    this.sharedService.filterView$.subscribe((value) => {
      this.filterViews = value;
    });
  }

  public ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  public get searchedItems(): YouTubeVideoData[] {
    return this.searchResultsService.searchedItems;
  }
}
