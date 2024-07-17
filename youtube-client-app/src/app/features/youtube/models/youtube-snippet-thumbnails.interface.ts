import { YouTubeVideoThumbnail } from './youtube-video-thumbnail.interface';

export interface YouTubeSnippetThumbnails {
  default: YouTubeVideoThumbnail;
  medium: YouTubeVideoThumbnail;
  high: YouTubeVideoThumbnail;
  standard?: YouTubeVideoThumbnail;
  maxres?: YouTubeVideoThumbnail;
}
