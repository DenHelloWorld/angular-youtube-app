import { createReducer, on } from '@ngrx/store';
import {
  clearYouTubeCards,
  loadYouTubeCards,
  loadYouTubeCardsFailure,
  loadYouTubeCardsSuccess,
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
  on(
    loadYouTubeCardsSuccess,
    (state, { cards }): YouTubeCardsState => ({
      ...state,
      youtubeCards: cards,
      error: null,
    }),
  ),
  on(
    loadYouTubeCardsFailure,
    (state, { error }): YouTubeCardsState => ({ ...state, error }),
  ),
  on(
    clearYouTubeCards,
    (state): YouTubeCardsState => ({ ...state, youtubeCards: [] }),
  ),
);
