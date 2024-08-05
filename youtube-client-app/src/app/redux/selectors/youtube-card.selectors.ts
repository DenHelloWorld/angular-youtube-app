import { createSelector } from '@ngrx/store';
import { youtubeCardsFeature } from 'app/redux/features/youtube-card.feature';

export const selectYoutubeCards = createSelector(
  youtubeCardsFeature.selectYoutubeCards,
  (cards) => cards || [],
);
