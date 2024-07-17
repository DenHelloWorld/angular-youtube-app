import { YouTubeVideoData } from './youtube-video-data.interface';

export interface YouTubeResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YouTubeVideoData[];
}
