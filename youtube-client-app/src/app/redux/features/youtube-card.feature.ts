import { createFeature } from '@ngrx/store';
import { youtubeCardReducer } from 'app/redux/reducers/youtube-card.reducer';

export const youtubeCardsFeature = createFeature({
  name: 'youtubeCards',
  reducer: youtubeCardReducer,
});
