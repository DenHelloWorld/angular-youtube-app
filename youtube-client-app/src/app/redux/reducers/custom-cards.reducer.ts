import { createReducer, on } from '@ngrx/store';
import {
  addCard,
  loadCardsSuccess,
} from 'app/redux/actions/custom-cards.actions';
import { initialCustomCardsState, CustomCardsState } from 'app/redux/reducers/youtube-cards.reducer';


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
