import { MetaReducer } from '@ngrx/store';
import { AppState } from 'app/redux/states/app.state';
import { logger } from 'app/redux/reducers/meta.reducer';
import { environment } from 'environments/environment';

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];
