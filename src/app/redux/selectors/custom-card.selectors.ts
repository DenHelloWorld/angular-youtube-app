import { createSelector } from '@ngrx/store';
import { customCardsFeature } from 'app/redux/features/custom-card.feature';

export const selectCustomCards = createSelector(
  customCardsFeature.selectCustomCards,
  (cards) => cards || [],
);
