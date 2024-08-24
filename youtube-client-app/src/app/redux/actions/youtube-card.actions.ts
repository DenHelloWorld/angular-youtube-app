import { createAction, props } from '@ngrx/store';
import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';

export const loadYouTubeCards = createAction(
  '[YouTubeCard] Load YouTube Cards',
);
export const loadYouTubeCardsSuccess = createAction(
  '[YouTubeCard] Load YouTube Cards Success',
  props<{ cards: YouTubeVideoDetailsData[] }>(),
);
export const loadYouTubeCardsFailure = createAction(
  '[YouTubeCard] Load YouTube Cards Failure',
  props<{ error: string }>(),
);
export const clearYouTubeCards = createAction(
  '[YouTubeCard] Clear YouTube Cards',
);
export const addYouTubeCardToFavorites = createAction(
  '[YouTubeCard] Add YouTube Card to Favorites',
  props<{ cardId: string }>(),
);
export const removeYouTubeCardFromFavorites = createAction(
  '[YouTubeCard] Remove YouTube Card from Favorites',
  props<{ cardId: string }>(),
);
