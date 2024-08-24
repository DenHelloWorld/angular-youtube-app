import { Pipe } from '@angular/core';
import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';
import { AbstractFilterByTitlePipe } from 'app/features/youtube/pipes/abstractFilterByTitle.pipe';

@Pipe({
  name: 'filterYouTubeByTitle',
  standalone: true,
})
export class FilterYouTubeCardByTitlePipe extends AbstractFilterByTitlePipe<YouTubeVideoDetailsData> {
  protected getTitle(item: YouTubeVideoDetailsData): string {
    return item.snippet.title;
  }
}
