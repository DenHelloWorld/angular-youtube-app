import { YouTubeVideoSnippet } from './youtube-video-snippet.interface';
import { YouTubeVideoStatistics } from './youtube-video-statistics.interface';

export interface YouTubeVideoData {
  kind: string;
  etag: string;
  id: string;
  snippet: YouTubeVideoSnippet;
  statistics?: YouTubeVideoStatistics;
}
