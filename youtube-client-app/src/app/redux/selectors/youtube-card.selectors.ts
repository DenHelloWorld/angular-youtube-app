import { createSelector } from '@ngrx/store';
import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';
import { youtubeCardsFeature } from 'app/redux/features/youtube-card.feature';
import { AppState } from 'app/redux/states/app.state';

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

export const selectFavoriteListIds = createSelector(
  selectYoutubeCardsState,
  (state) => state.favoriteListIds,
);

export const selectVideoList = createSelector(
  selectAllVideos,
  selectVideoListIds,
  (videos, ids) => ids.map((id) => videos[id]),
);

export const selectFavoriteList = createSelector(
  selectAllVideos,
  selectFavoriteListIds,
  (videos, ids) => ids.map((id) => videos[id]),
);
