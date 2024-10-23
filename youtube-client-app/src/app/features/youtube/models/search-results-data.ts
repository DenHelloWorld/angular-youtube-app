import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';
import { CustomCard } from 'app/features/youtube/models/custom-card.interface';
import { Observable } from 'rxjs';

export interface VideoFilters {
  filterTitle: string;
  filterDate: string;
  filterViews: string;
  searchInputHeader: string;
}
export interface SearchResultsData {
  filters: VideoFilters;
  searchedItems$: Observable<YouTubeVideoDetailsData[]>;
}
export interface CustomCardsData {
  filters: VideoFilters;
  customItems$: Observable<CustomCard[]>;
}
