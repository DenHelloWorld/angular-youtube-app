import { createFeature } from '@ngrx/store';
import { customCardReducer } from 'app/redux/reducers/custom-card.reducer';

export const customCardsFeature = createFeature({
  name: 'customCards',
  reducer: customCardReducer,
});
