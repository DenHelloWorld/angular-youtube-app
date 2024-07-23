import { YouTubeVideoStatistics } from 'app/features/youtube/models/youtube-video-statistics.interface';
import { YouTubeVideoThumbnail } from 'app/features/youtube/models/youtube-video-thumbnail.interface';

export type DetalisData = {
  statistics?: YouTubeVideoStatistics;
  img: YouTubeVideoThumbnail;
  description: string;
  channelTitle: string;
  publishedAt: string;
  title: string;
};
