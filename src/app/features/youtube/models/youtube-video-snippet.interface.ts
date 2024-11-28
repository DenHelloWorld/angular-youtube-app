import { YouTubeSnippetThumbnails } from 'app/features/youtube/models/youtube-snippet-thumbnails.interface';

export interface YouTubeVideoSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: YouTubeSnippetThumbnails;
  channelTitle: string;
  tags?: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage?: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage?: string;
}
