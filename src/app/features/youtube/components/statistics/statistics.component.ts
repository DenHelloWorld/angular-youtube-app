import { Component, Input } from '@angular/core';
import { YouTubeVideoStatistics } from 'app/features/youtube/models/youtube-video-statistics.interface';
import { PRIME_NG_MODULES } from 'app/shared/modules/prime-ng-modules';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  standalone: true,
  imports: [PRIME_NG_MODULES.ToolbarModule, PRIME_NG_MODULES.TagModule],
})
export class StatisticsComponent {
  @Input() statistics?: YouTubeVideoStatistics = {
    viewCount: '',
    likeCount: '',
    favoriteCount: '',
    commentCount: '',
  };
}
