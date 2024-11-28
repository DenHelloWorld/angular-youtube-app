import { concatLatestFrom } from '@ngrx/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { addCard, loadCards, loadCardsSuccess } from 'app/redux/actions/custom-card.actions';
import { Store } from '@ngrx/store';
import { selectCustomCards } from 'app/redux/selectors/custom-card.selectors';

@Injectable()
export class CustomCardEffects {
  constructor(private actions$: Actions, private store: Store) {}

  saveCustomCard$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(addCard),
        concatLatestFrom(() => this.store.select(selectCustomCards)),
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
