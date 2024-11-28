import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';

export interface YouTubeCardsState {
  videos: { [id: string]: YouTubeVideoDetailsData };
  videoListIds: string[];
  favoriteListIds: string[];
  favoriteVideos: YouTubeVideoDetailsData[];
  error: string | null;
}

export const initialYouTubeCardsState: YouTubeCardsState = {
  videos: {},
  videoListIds: [],
  favoriteListIds: [],
  favoriteVideos: [],
  error: null,
};
