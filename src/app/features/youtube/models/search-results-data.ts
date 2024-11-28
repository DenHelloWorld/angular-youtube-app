import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';
import { CustomCard } from 'app/features/youtube/models/custom-card.interface';
import { Observable } from 'rxjs';

export interface VideoFilters {
  filterTitle: string;
  filterDate: string;
  filterViews: string;
}
export interface SearchResultsData {
  searchInputHeader: string;
  filters: VideoFilters;
  searchedItems$: Observable<YouTubeVideoDetailsData[]>;
}
export interface CustomCardsData {
  searchInputHeader: string;
  filters: VideoFilters;
  customItems$: Observable<CustomCard[]>;
}
