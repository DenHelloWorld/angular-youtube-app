import { YouTubeVideoSnippet } from 'app/features/youtube/models/youtube-video-snippet.interface';
import { YouTubeVideoStatistics } from 'app/features/youtube/models/youtube-video-statistics.interface';

export interface YouTubeVideoData {
  kind: string;
  etag: string;
  id: { kind: 'youtube#video'; videoId: '0c3S0aR6gX0' };
  snippet: YouTubeVideoSnippet;
  statistics?: YouTubeVideoStatistics;
}
