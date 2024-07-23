import { YouTubeVideoData } from 'app/features/youtube/models/youtube-video-data.interface';

export type SearchResultsData = {
  filterTitle: string;
  filterDate: string;
  filterViews: string;
  searchInputHeader: string;
  searchedItems: YouTubeVideoData[];
};
