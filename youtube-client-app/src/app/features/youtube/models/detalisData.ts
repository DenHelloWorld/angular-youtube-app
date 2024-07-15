import { Statistics } from 'app/features/youtube/models/statistics';
import { IThumbnail } from './youtube-response.model';


export type DetalisData = {
  statistics: Statistics;
  img: IThumbnail;
  description: string;
  channelTitle: string;
  publishedAt: string;
};
