import { createReducer, on } from '@ngrx/store';
import { addCard, loadCardsSuccess } from 'app/redux/actions/custom-card.actions';
import { initialCustomCardsState, CustomCardsState } from 'app/redux/states/custom-card.state';

export const customCardReducer = createReducer(
  initialCustomCardsState,
  on(
    addCard,
    (state, { card }): CustomCardsState => ({
      ...state,
      customCards: [...state.customCards, card],
    }),
  ),
  on(
    loadCardsSuccess,
    (state, { cards }): CustomCardsState => ({
      ...state,
      customCards: cards,
    }),
  ),
);
