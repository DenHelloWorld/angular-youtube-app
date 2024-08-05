import { createReducer, on } from '@ngrx/store';
import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';
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
);
