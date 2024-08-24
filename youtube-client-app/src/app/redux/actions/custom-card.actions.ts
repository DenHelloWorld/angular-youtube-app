import { createAction, props } from '@ngrx/store';
import { CustomCard } from 'app/features/youtube/models/custom-card.interface';

export const loadCards = createAction('[Card] Load Cards');
export const loadCardsSuccess = createAction(
  '[Card] Load Cards Success',
  props<{ cards: CustomCard[] }>(),
);
export const loadCardsFailure = createAction(
  '[Card] Load Cards Failure',
  props<{ error: string }>(),
);
export const addCard = createAction(
  '[Card] Add Card',
  props<{ card: CustomCard }>(),
);
export const updateCard = createAction(
  '[Card] Update Card',
  props<{ card: CustomCard }>(),
);
export const deleteCard = createAction(
  '[Card] Delete Card',
  props<{ id: string }>(),
);
