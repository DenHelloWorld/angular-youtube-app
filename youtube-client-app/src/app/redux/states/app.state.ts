import { CustomCardsState } from 'app/redux/states/custom-card.state';
import { YouTubeCardsState } from 'app/redux/states/youtube-card.state';



export interface AppState {
  customCards: CustomCardsState;
  youtubeCards: YouTubeCardsState;
}
