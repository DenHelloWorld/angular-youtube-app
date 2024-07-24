import { YouTubeVideoSnippet } from 'app/features/youtube/models/youtube-video-snippet.interface';
import { YouTubeVideoStatistics } from 'app/features/youtube/models/youtube-video-statistics.interface';

export interface YouTubeVideoData {
  kind: string;
  etag: string;
  id: string;
  snippet: YouTubeVideoSnippet;
  statistics?: YouTubeVideoStatistics;
}
