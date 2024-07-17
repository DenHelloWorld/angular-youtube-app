
import { Component, OnInit, Input } from '@angular/core';
import { YouTubeVideoStatistics } from '../../models/youtube-video-statistics.interface';
import { ToolbarModule } from 'primeng/toolbar';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  standalone: true,
  imports: [ToolbarModule],
})
export class StatisticsComponent implements OnInit {
  @Input() statistics?: YouTubeVideoStatistics = {
    viewCount: '',
    likeCount: '',
    dislikeCount: '',
    favoriteCount: '',
    commentCount: '',
  };

  ngOnInit() {
  }

}
