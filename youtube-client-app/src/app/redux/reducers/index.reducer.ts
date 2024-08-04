import { ActionReducerMap } from '@ngrx/store';
import { customCardReducer } from 'app/redux/reducers/custom-cards.reducer';
import { AppState, youtubeCardReducer } from 'app/redux/reducers/youtube-cards.reducer';

export const reducers: ActionReducerMap<AppState> = {
  customCards: customCardReducer,
  youtubeCards: youtubeCardReducer,
};
