import { Item } from './youtube-response.model';

export type SearchResultsData = {
  filterTitle: string;
  filterDate: string;
  filterViews: string;
  searchInputHeader: string;
  searchedItems: Item[];
};
