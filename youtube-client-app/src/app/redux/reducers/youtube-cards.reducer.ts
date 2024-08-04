import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';
import { CustomCard } from 'app/redux/actions/custom-cards.actions';
import { createReducer, on } from '@ngrx/store';
import { clearYouTubeCards, loadYouTubeCards, loadYouTubeCardsFailure, loadYouTubeCardsSuccess } from 'app/redux/actions/youtube-cards.actions';

export interface CardsState {
  youtubeCards: YouTubeVideoDetailsData[];
  customCards: CustomCard[];
  error: string | null;
}
export const initialState: CardsState = {
  youtubeCards: [],
  customCards: [],
  error: null,
};
export interface AppState {
  youtubeCards: CardsState;
}

export const youtubeCardReducer = createReducer(
  initialState,
  on(loadYouTubeCards, (state): CardsState => ({ ...state, error: null })),
  on(
    loadYouTubeCardsSuccess,
    (state, { cards }): CardsState => ({
      ...state,
      youtubeCards: cards,
      error: null,
    }),
  ),
  on(
    loadYouTubeCardsFailure,
    (state, { error }): CardsState => ({ ...state, error }),
  ),
  on(clearYouTubeCards, (state): CardsState => ({ ...state, youtubeCards: [] })),
);
