import { buildUrl } from 'build-url-ts';
import { SEARCH_BY_TITLE_URL } from '../constants/search-by-title-url';
import { DETAILS_BY_ID_URL } from '../constants/details-by-id-url';

export const BUILDED_URLS = {
  detailsByVideoId(id: string): string {
    return (
      buildUrl(DETAILS_BY_ID_URL, {
        queryParams: {
          part: 'snippet,contentDetails,statistics',
          id: id,
        },
      }) ?? ''
    );
  },
  // nextPageToken в ответе на запрос по тайтлу, что можно использовать для получения предидущей станицы
  videosByTitle(title: string): string {
    return (
      buildUrl(SEARCH_BY_TITLE_URL, {
        queryParams: {
          part: 'snippet',
          type: 'video',
          q: title,
          maxResults: 7,
        },
      }) ?? ''
    );
  },
};
