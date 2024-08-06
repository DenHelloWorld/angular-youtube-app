import { createSelector } from '@ngrx/store';
import { selectCustomCards } from 'app/redux/selectors/custom-card.selectors';
import { selectVideoList } from 'app/redux/selectors/youtube-card.selectors';

export const selectCombinedVideos = createSelector(
  selectCustomCards,
  selectVideoList,
  (customCards, videoList) => [...customCards, ...videoList],
);
