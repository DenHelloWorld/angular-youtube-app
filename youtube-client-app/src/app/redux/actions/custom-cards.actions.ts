
import { createAction, props } from '@ngrx/store';

export interface CustomCard {
  id: number | string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  creationDate: string;
}
// В квадратных скобках пишут, где это было, а завтем само событие
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
