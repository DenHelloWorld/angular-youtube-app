import { SEARCH_BY_TITLE_URL } from '../constants/search-by-title-url';
import { DETAILS_BY_ID_URL } from '../constants/details-by-id-url';

export const BUILDED_URLS = {
  detailsByVideoId(id: string): string {
    const params = new URLSearchParams({
      part: 'snippet,contentDetails,statistics',
      id: id,
    });

    return `${DETAILS_BY_ID_URL}?${params.toString()}`;
  },

  videosByTitle(title: string): string {
    const params = new URLSearchParams({
      part: 'snippet',
      type: 'video',
      q: title,
      maxResults: '10',
    });

    return `${SEARCH_BY_TITLE_URL}?${params.toString()}`;
  },
};
