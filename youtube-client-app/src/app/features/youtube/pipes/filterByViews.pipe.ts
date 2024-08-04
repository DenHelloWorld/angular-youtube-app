import { Pipe, PipeTransform } from '@angular/core';
import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';

@Pipe({
  name: 'filterByViews',
  standalone: true,
})
export class FilterByViewsPipe implements PipeTransform {
  public transform(
    items: YouTubeVideoDetailsData[],
    order: string,
  ): YouTubeVideoDetailsData[] {
    return items
      ? [...items].sort((a, b) => {
        const viewCountA = +(a.statistics?.viewCount ?? 0);
        const viewCountB = +(b.statistics?.viewCount ?? 0);
        return order === 'asc'
          ? viewCountA - viewCountB
          : viewCountB - viewCountA;
      })
      : [];
  }
}
