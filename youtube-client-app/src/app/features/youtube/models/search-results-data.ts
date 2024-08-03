import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';

export type SearchResultsData = {
  filterTitle: string;
  filterDate: string;
  filterViews: string;
  searchInputHeader: string;
  searchedItems: YouTubeVideoDetailsData[];
};
