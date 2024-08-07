import { createSelector, MemoizedSelector } from '@ngrx/store';
import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';
import { youtubeCardsFeature } from 'app/redux/features/youtube-card.feature';
import { AppState } from 'app/redux/states/app.state';

import { Observable, map } from 'rxjs';

export const selectYoutubeCardsState = (state: AppState) => state.youtubeCards;

export const selectAllVideos = createSelector(
  selectYoutubeCardsState,
  (state) => state.videos,
);

export const selectAllVideosArray = createSelector(
  youtubeCardsFeature.selectVideos,
  (videos) => Object.values(videos) as YouTubeVideoDetailsData[],
);

export const selectVideoListIds = createSelector(
  selectYoutubeCardsState,
  (state) => state.videoListIds,
);



export const selectVideoList = createSelector(
  selectAllVideos,
  selectVideoListIds,
  (videos, ids) => ids.map((id) => videos[id]),
);

export const selectFavoriteListIds = (state: AppState) => {
  return state.youtubeCards.favoriteListIds;
};


export const selectIsFavorite = (
  cardId: string,
): MemoizedSelector<AppState, boolean> =>
  createSelector(selectFavoriteListIds, (favoriteListIds: string[]) => {
    console.log('favoriteListIds:', favoriteListIds);
    return favoriteListIds ? favoriteListIds.includes(cardId) : false;
  });

export const selectIsFavoriteObservable = (
  cardId: string,
  state$: Observable<AppState>,
): Observable<boolean> =>
  state$.pipe(map((state) => selectIsFavorite(cardId)(state)));
