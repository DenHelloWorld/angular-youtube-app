export interface IThumbnail {
  url: string;
  width: number;
  height: number;
}
export interface Item {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: IThumbnail;
      medium: IThumbnail;
      high: IThumbnail;
      standard?: IThumbnail;
      maxres?: IThumbnail;
    };
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
  };
  statistics?: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}

export interface IYouTubeVideoListResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Item[];
}
