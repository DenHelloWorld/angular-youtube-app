import { createAction, props } from '@ngrx/store';
import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';

export const loadFavoriteCards = createAction('[Favorite] Load YouTube Cards');

export const loadFavoriteCardsSuccess = createAction(
  '[Favorite] Load YouTube Cards Success',
  props<{ cards: YouTubeVideoDetailsData[] }>(),
);
