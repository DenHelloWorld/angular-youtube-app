
import { Component, Input } from '@angular/core';
import { YouTubeVideoStatistics } from '../../models/youtube-video-statistics.interface';
import { ToolbarModule } from 'primeng/toolbar';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  standalone: true,
  imports: [ToolbarModule, TagModule],
})
export class StatisticsComponent {
  @Input() statistics?: YouTubeVideoStatistics = {
    viewCount: '',
    likeCount: '',
    dislikeCount: '',
    favoriteCount: '',
    commentCount: '',
  };
}
