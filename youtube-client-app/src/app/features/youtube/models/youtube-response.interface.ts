import { YouTubeVideoData } from 'app/features/youtube/models/youtube-video-data.interface';


export interface YouTubeResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YouTubeVideoData[];
}
