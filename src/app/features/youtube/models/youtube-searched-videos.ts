import { YouTubeVideoSnippet } from './youtube-video-snippet.interface';

export interface YouTubeSearchedVideosData {
  kind: string;
  etag: string;
  id: { kind: ''; videoId: '' };
  snippet: YouTubeVideoSnippet;
}
