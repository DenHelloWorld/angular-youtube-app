import { MemoizedSelector, createSelector } from '@ngrx/store';
import { AppState } from 'app/redux/states/app.state';
import { Observable, map } from 'rxjs';

export const selectFavoriteListIdsState = (state: AppState) => {
  return state.youtubeCards.favoriteListIds;
};

export const selectFavoriteListIdsArray = createSelector(
  selectFavoriteListIdsState,
  (favoriteListIds) => favoriteListIds,
);

export const selectIsFavorite = (
  cardId: string,
): MemoizedSelector<AppState, boolean> =>
  createSelector(selectFavoriteListIdsState, (favoriteListIds: string[]) => {
    return favoriteListIds ? favoriteListIds.includes(cardId) : false;
  });

export const selectIsFavoriteObservable = (
  cardId: string,
  state$: Observable<AppState>,
): Observable<boolean> =>
  state$.pipe(map((state) => selectIsFavorite(cardId)(state)));

