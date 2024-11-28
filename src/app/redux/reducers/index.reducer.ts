import { ActionReducerMap } from '@ngrx/store';
import { AppState } from 'app/redux/states/app.state';
import { customCardReducer } from 'app/redux/reducers/custom-card.reducer';
import { youtubeCardReducer } from 'app/redux/reducers/youtube-card.reducer';

export const reducers: ActionReducerMap<AppState> = {
  customCards: customCardReducer,
  youtubeCards: youtubeCardReducer,
};
