import { Pipe, PipeTransform } from '@angular/core';
import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';

@Pipe({
  name: 'sortrYouTubeByViews',
  standalone: true,
})
export class SortYoutubeCardByViewsPipe implements PipeTransform {
  public transform(
    items: YouTubeVideoDetailsData[] | null,
    order: string,
  ): YouTubeVideoDetailsData[] {
    if (!items) {
      return [];
    }
    return [...items].sort((a, b) => {
      const viewCountA = +(a.statistics?.viewCount ?? 0);
      const viewCountB = +(b.statistics?.viewCount ?? 0);
      return order === 'asc'
        ? viewCountA - viewCountB
        : viewCountB - viewCountA;
    });
  }
}
