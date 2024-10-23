import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';

export interface YouTubeDetailsResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YouTubeVideoDetailsData[];
}
