import { CustomCard } from 'app/features/youtube/models/custom-card.interface';

export interface CustomCardsState {
  customCards: CustomCard[];
  error: string | null;
}
export const initialCustomCardsState: CustomCardsState = {
  customCards: [],
  error: null,
};
