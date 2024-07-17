import { Pipe, PipeTransform } from '@angular/core';
import { YouTubeVideoData } from 'app/interfaces/youtube-video-data.interface';

@Pipe({
  name: 'filterByViews',
  standalone: true,
})
export class FilterByViewsPipe implements PipeTransform {
  public transform(
    items: YouTubeVideoData[],
    order: string,
  ): YouTubeVideoData[] {
    return (
      items?.sort((a, b) => {
        const viewCountA = +(a.statistics?.viewCount ?? 0);
        const viewCountB = +(b.statistics?.viewCount ?? 0);
        return order === 'asc'
          ? viewCountA - viewCountB
          : viewCountB - viewCountA;
      }) || []
    );
  }
}
