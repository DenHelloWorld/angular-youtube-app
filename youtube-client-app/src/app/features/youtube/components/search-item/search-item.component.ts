import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  OnInit,
} from '@angular/core';
import { Statistics } from 'app/features/youtube/models/statistics';
import { Item } from 'app/features/youtube/models/youtube-response.model';
import CardComponent from 'app/shared/components/card/card.component';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import ColoredBorderDirective from 'app/shared/directives/colored-border.directive';
import { ToolbarModule } from 'primeng/toolbar';
import { SearchItemService } from '../../services/search-item.service';

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
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class SearchItemComponent implements OnInit {
  @Input() itemData: Item | undefined;

  id: string = '';

  imgDefaultUrl: string = '';

  title: string = '';

  publishedAt: string = '';

  statistics: Statistics = {
    viewCount: '',
    likeCount: '',
    dislikeCount: '',
    favoriteCount: '',
    commentCount: '',
  };

  constructor(
    private searchItemService: SearchItemService,
  ) {}

  ngOnInit(): void {
    this.setPublishedAt();
    this.setImgDefaultUrl();
    this.setTitle();
    this.setStatistic();
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

  private setStatistic(): void {
    if (this.itemData?.statistics) {
      this.statistics.viewCount = this.itemData.statistics.viewCount ?? '';
      this.statistics.commentCount =
        this.itemData.statistics.commentCount ?? '';
      this.statistics.dislikeCount =
        this.itemData.statistics.dislikeCount ?? '';
      this.statistics.favoriteCount =
        this.itemData.statistics.favoriteCount ?? '';
      this.statistics.likeCount = this.itemData.statistics.likeCount ?? '';
    }
  }

  private setPublishedAt(): void {
    this.publishedAt = this.itemData?.snippet?.publishedAt ?? '';
  }

  openDetalis() {
    this.searchItemService.openDetalis(this.id);
  }
}
