import { BASE_YT_API_URL } from './../constants/base-yt-api-url';
import { buildUrl } from 'build-url-ts';
import { SEARCH_BY_TITLE_URL } from '../constants/search-by-title-url';
import { API_KEY } from '../constants/api-key';
import { DETAILS_BY_ID_URL } from '../constants/details-by-id-url';

export const BUILDED_URLS = {
  detailsByVideoId(id: string): string {
    return (
      buildUrl(BASE_YT_API_URL + DETAILS_BY_ID_URL, {
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
      buildUrl(BASE_YT_API_URL + SEARCH_BY_TITLE_URL, {
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
