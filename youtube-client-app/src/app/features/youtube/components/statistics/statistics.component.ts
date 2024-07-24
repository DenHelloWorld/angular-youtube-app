
import { Component, Input } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { TagModule } from 'primeng/tag';
import { YouTubeVideoStatistics } from 'app/features/youtube/models/youtube-video-statistics.interface';

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
