import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';
import { CustomCard } from 'app/redux/actions/custom-cards.actions';
import { createReducer, on } from '@ngrx/store';
import { clearYouTubeCards, loadYouTubeCards, loadYouTubeCardsFailure, loadYouTubeCardsSuccess } from 'app/redux/actions/youtube-cards.actions';

export interface CustomCardsState {
  customCards: CustomCard[];
  error: string | null;
}

export const initialCustomCardsState: CustomCardsState = {
  customCards: [],
  error: null,
};

export interface YouTubeCardsState {
  youtubeCards: YouTubeVideoDetailsData[];
  error: string | null;
}

export const initialYouTubeCardsState: YouTubeCardsState = {
  youtubeCards: [],
  error: null,
};

export interface AppState {
  customCards: CustomCardsState;
  youtubeCards: YouTubeCardsState;
}


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

