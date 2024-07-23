import { YouTubeVideoSnippet } from 'app/features/youtube/models/youtube-video-snippet.interface';

export interface YouTubeVideoData {
  kind: string;
  etag: string;
  id: { kind: ''; videoId: '' };
  snippet: YouTubeVideoSnippet;
}
