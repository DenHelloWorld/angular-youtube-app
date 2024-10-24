import { Component, inject, Input, OnInit } from '@angular/core';
import { FavoriteButtonComponent } from 'app/features/youtube/components/favorite-button/favorite-button.component';
import { StatisticsComponent } from 'app/features/youtube/components/statistics/statistics.component';
import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';
import { SearchItemService } from 'app/features/youtube/services/search-item.service';
import { CardComponent } from 'app/shared/components/card/card.component';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import { ColoredBorderDirective } from 'app/shared/directives/colored-border.directive';
import { ANGULAG_MODULES } from 'app/shared/modules/angular-modules';
import { PRIME_NG_MODULES } from 'app/shared/modules/prime-ng-modules';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  imports: [
    FavoriteButtonComponent,
    ColoredBorderDirective,
    CardComponent,
    CustomButtonComponent,
    StatisticsComponent,
    ANGULAG_MODULES.CommonModule,
    PRIME_NG_MODULES.ToolbarModule,
  ],
  standalone: true,
})
export class SearchItemComponent implements OnInit {
  @Input() itemData?: YouTubeVideoDetailsData;

  public id: string = '';

  public imgDefaultUrl: string = '';

  public title: string = '';

  public publishedAt: string = '';

  private searchItemService = inject(SearchItemService);

  public ngOnInit(): void {
    this.setPublishedAt();
    this.setImgDefaultUrl();
    this.setTitle();
    this.setId();
  }

  private setImgDefaultUrl(): void {
    this.imgDefaultUrl = this.itemData?.snippet?.thumbnails?.medium?.url ?? '';
  }

  private setTitle(): void {
    this.title = this.itemData?.snippet?.title ?? this.itemData?.snippet?.localized?.title ?? '';
  }

  private setId(): void {
    this.id = this.itemData?.id ?? '';
  }

  private setPublishedAt(): void {
    this.publishedAt = this.itemData?.snippet?.publishedAt ?? '';
  }

  public openDetails() {
    this.searchItemService.openDetails(this.id);
  }
}
