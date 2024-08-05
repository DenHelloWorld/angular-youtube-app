import { concatLatestFrom } from '@ngrx/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import {
  addCard,
  loadCards,
  loadCardsSuccess,
} from 'app/redux/actions/custom-card.actions';
import { Store } from '@ngrx/store';
import { selectCustomCards } from 'app/redux/selectors/custom-card.selectors';

@Injectable()
export class CardEffects {
  constructor(private actions$: Actions, private store: Store) {}

  saveCustomCard$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(addCard),
        concatLatestFrom(() => this.store.select(selectCustomCards)),
        tap(([action, currentCards]) => {
          console.log('Effect triggered for action:', action);
          const updatedCards = [[...currentCards], action.card];
          console.log('Updated customCards:', updatedCards);
        }),
      );
    },
    { dispatch: false },
  );

  loadCustomCards$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCards),
      concatLatestFrom(() => this.store.select(selectCustomCards)),
      map(([, cards]) => loadCardsSuccess({ cards })),
    );
  });
}
