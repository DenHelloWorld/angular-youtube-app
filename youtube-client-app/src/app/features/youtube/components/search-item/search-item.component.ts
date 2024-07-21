import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  OnInit,
} from '@angular/core';
import CardComponent from 'app/shared/components/card/card.component';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import ColoredBorderDirective from 'app/shared/directives/colored-border.directive';
import { ToolbarModule } from 'primeng/toolbar';
import { SearchItemService } from '../../services/search-item.service';
// import { YouTubeVideoStatistics } from '../../models/youtube-video-statistics.interface';
import { YouTubeVideoData } from '../../models/youtube-video-data.interface';
import { StatisticsComponent } from '../statistics/statistics.component';

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
    this.id = this.itemData?.id ?? '';
  }

  private setPublishedAt(): void {
    this.publishedAt = this.itemData?.snippet?.publishedAt ?? '';
  }

  public openDetalis() {
    this.searchItemService.openDetalis(this.id);
  }
}
