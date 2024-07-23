import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  OnInit,
} from '@angular/core';
import { StatisticsComponent } from 'app/features/youtube/components/statistics/statistics.component';
import { YouTubeVideoData } from 'app/features/youtube/models/youtube-video-data.interface';
import { SearchItemService } from 'app/features/youtube/services/search-item.service';
import CardComponent from 'app/shared/components/card/card.component';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import ColoredBorderDirective from 'app/shared/directives/colored-border.directive';
import { ToolbarModule } from 'primeng/toolbar';


@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  imports: [
    ColoredBorderDirective,
    ToolbarModule,
    CardComponent,
    CustomButtonComponent,
    CommonModule,
    StatisticsComponent,
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class SearchItemComponent implements OnInit {
  @Input() itemData?: YouTubeVideoData;

  public id: string = '';

  public imgDefaultUrl: string = '';

  public title: string = '';

  public publishedAt: string = '';

  constructor(private searchItemService: SearchItemService) {}

  public ngOnInit(): void {
    this.setPublishedAt();
    this.setImgDefaultUrl();
    this.setTitle();
    this.setId();
  }

  private setImgDefaultUrl(): void {
    this.imgDefaultUrl =
      this.itemData?.snippet?.thumbnails?.standard?.url ?? '';
  }

  private setTitle(): void {
    this.title =
      this.itemData?.snippet?.title ??
      this.itemData?.snippet?.localized?.title ??
      '';
  }

  private setId(): void {
    this.id = this.itemData?.id.videoId ?? '';
    console.log(this.id);
  }

  private setPublishedAt(): void {
    this.publishedAt = this.itemData?.snippet?.publishedAt ?? '';
  }

  public openDetails() {
    this.searchItemService.openDetails(this.id);
  }
}
