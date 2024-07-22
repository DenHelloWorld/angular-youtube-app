import { YouTubeVideoThumbnail } from 'app/features/youtube/models/youtube-video-thumbnail.interface';

export interface YouTubeSnippetThumbnails {
  default: YouTubeVideoThumbnail;
  medium: YouTubeVideoThumbnail;
  high: YouTubeVideoThumbnail;
  standard?: YouTubeVideoThumbnail;
  maxres?: YouTubeVideoThumbnail;
}
