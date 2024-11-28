import { YouTubeSearchedVideosData } from 'app/features/youtube/models/youtube-searched-videos';


export interface YouTubeSearchResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YouTubeSearchedVideosData[];
}
