import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import CardComponent from 'app/components/card/card.component';
import { CustomButtonComponent } from 'app/components/custom-button/custom-button.component';
import { Item } from 'app/interfaces/youtube-response.interface';
import { ToolbarModule } from 'primeng/toolbar';



@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  imports: [ToolbarModule, CommonModule, CardComponent, CustomButtonComponent],
  standalone: true,
})
export default class SearchItemComponent implements OnInit {
  @Input() itemData: Item | undefined;

  imgDefaultUrl: string | undefined;

  title: string | undefined;

  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  } = {
      viewCount: '',
      likeCount: '',
      dislikeCount: '',
      favoriteCount: '',
      commentCount: '',
    };

  ngOnInit(): void {
    this.setImgDefaultUrl();
    this.setTitle();
    this.setStatistic();
  }

  private setImgDefaultUrl(): void {
    if (this.itemData && this.itemData.snippet?.thumbnails?.standard?.url) {
      this.imgDefaultUrl = this.itemData.snippet.thumbnails.standard.url;
    }
  }

  private setTitle(): void {
    if (this.itemData?.snippet?.title || this.itemData?.snippet?.localized.title) {
      this.title = this.itemData.snippet.title || this.itemData.snippet.localized.title;
    }
  }


  private setStatistic(): void {
    if (this.itemData?.statistics) {
      this.statistics.viewCount = this.itemData.statistics.viewCount || '';
      this.statistics.commentCount = this.itemData.statistics.commentCount || '';
      this.statistics.dislikeCount = this.itemData.statistics.dislikeCount || '';
      this.statistics.favoriteCount = this.itemData.statistics.favoriteCount || '';
      this.statistics.likeCount = this.itemData.statistics.likeCount || '';
    }
  }
}
