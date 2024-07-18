import { YouTubeVideoStatistics } from './youtube-video-statistics.interface';
import { YouTubeVideoThumbnail } from './youtube-video-thumbnail.interface';

export type DetalisData = {
  statistics?: YouTubeVideoStatistics;
  img: YouTubeVideoThumbnail;
  description: string;
  channelTitle: string;
  publishedAt: string;
};
