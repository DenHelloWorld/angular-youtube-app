import { YouTubeVideoSnippet } from './youtube-video-snippet.interface';
import { YouTubeVideoStatistics } from './youtube-video-statistics.interface';

export interface YouTubeVideoDetailsData {
  kind: string;
  etag: string;
  id: { kind: ''; videoId: '' };
  snippet: YouTubeVideoSnippet;
  statistics: YouTubeVideoStatistics;
}
