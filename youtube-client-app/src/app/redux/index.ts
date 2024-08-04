import { MetaReducer } from '@ngrx/store';
import { logger } from 'app/redux/reducers/meta.reducer';
import { AppState } from 'app/redux/reducers/youtube-cards.reducer';
import { environment } from 'environments/environment';

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];
