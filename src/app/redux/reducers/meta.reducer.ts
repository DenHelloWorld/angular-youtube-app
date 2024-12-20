import { ActionReducer, Action } from '@ngrx/store';
import { AppState } from 'app/redux/states/app.state';

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state: AppState | undefined, action: Action): AppState => {
    const nextState = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', nextState);
    console.groupEnd();
    return nextState;
  };
}
