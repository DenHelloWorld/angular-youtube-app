import { Item } from './youtube-response.model';

export type ISearchResultsData = {
  filterTitle: string;
  filterDate: string;
  filterViews: string;
  searchInputHeader: string;
  searchedItems: Item[];
};
