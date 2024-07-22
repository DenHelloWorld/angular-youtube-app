import { buildUrl } from 'build-url-ts';
import { SEARCH_URL } from '../constants/search-url';
import { API_KEY } from '../constants/api-key';
import { DETAILS_BY_ID } from '../constants/details-by-id-url';

export const BUILDED_URLS = {
  detailsByVideoId(id: string): string {
    return (
      buildUrl(DETAILS_BY_ID, {
        queryParams: {
          key: API_KEY,
          part: 'snippet,contentDetails,statistics',
          id: id,
        },
      }) ?? ''
    );
  },

  videosByTitle(title: string): string {
    return (
      buildUrl(SEARCH_URL, {
        queryParams: {
          key: API_KEY,
          part: 'snippet',
          type: 'video',
          q: title,
          maxResults: 10,
        },
      }) ?? ''
    );
  },
};
