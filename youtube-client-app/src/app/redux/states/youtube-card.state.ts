import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';

export interface YouTubeCardsState {
  youtubeCards: YouTubeVideoDetailsData[];
  error: string | null;
}

export const initialYouTubeCardsState: YouTubeCardsState = {
  youtubeCards: [],
  error: null,
};
