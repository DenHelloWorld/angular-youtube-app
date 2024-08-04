import { LocalStorageService } from 'angular-web-storage';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import {
  addCard,
  loadCards,
  loadCardsSuccess,
} from 'app/redux/actions/custom-cards.actions';

@Injectable()
export class CardEffects {
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
  ) {}

  saveCustomCard$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(addCard),
        tap((action) => {
          console.log('Effect triggered for action:', action);
          const currentCards =
            this.localStorageService.get('customCards') || [];
          currentCards.push(action.card);
          this.localStorageService.set('customCards', currentCards);
          console.log('Updated customCards in local storage:', currentCards);
        }),
      );
    },
    { dispatch: false },
  );

  loadCustomCards$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCards),
      map(() => {
        const cards = this.localStorageService.get('customCards') || [];
        return loadCardsSuccess({ cards });
      }),
    );
  });
}
