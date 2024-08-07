import { createReducer, on } from '@ngrx/store';
import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';
import {
  addYouTubeCardToFavorites,
  clearYouTubeCards,
  loadYouTubeCards,
  loadYouTubeCardsFailure,
  loadYouTubeCardsSuccess,
  removeYouTubeCardFromFavorites,
} from 'app/redux/actions/youtube-card.actions';
import {
  initialYouTubeCardsState,
  YouTubeCardsState,
} from 'app/redux/states/youtube-card.state';

export const youtubeCardReducer = createReducer(
  initialYouTubeCardsState,
  on(
    loadYouTubeCards,
    (state): YouTubeCardsState => ({ ...state, error: null }),
  ),
  on(loadYouTubeCardsSuccess, (state, { cards }): YouTubeCardsState => {
    const videos = cards.reduce((acc, card) => {
      acc[card.id] = card;
      return acc;
    }, {} as { [id: string]: YouTubeVideoDetailsData });

    const videoListIds = cards.map((card) => card.id);

    return {
      ...state,
      videos,
      videoListIds,
      error: null,
    };
  }),
  on(
    loadYouTubeCardsFailure,
    (state, { error }): YouTubeCardsState => ({ ...state, error }),
  ),
  on(
    clearYouTubeCards,
    (state): YouTubeCardsState => ({
      ...state,
      videos: {},
      videoListIds: [],
      favoriteListIds: [],
    }),
  ),
  on(addYouTubeCardToFavorites, (state, { cardId }): YouTubeCardsState => {
    if (!state.favoriteListIds.includes(cardId)) {
      return {
        ...state,
        favoriteListIds: [...state.favoriteListIds, cardId],
      };
    }
    return state;
  }),
  on(removeYouTubeCardFromFavorites, (state, { cardId }): YouTubeCardsState => {
    return {
      ...state,
      favoriteListIds: state.favoriteListIds.filter(
        (favId) => favId !== cardId,
      ),
    };
  }),
);
