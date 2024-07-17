import { Pipe, PipeTransform } from '@angular/core';
import { YouTubeVideoData } from 'app/interfaces/youtube-video-data.interface';

@Pipe({
  name: 'filterByViews',
  // pure: false,
  standalone: true,
})
export class FilterByViewsPipe implements PipeTransform {
  transform(items: YouTubeVideoData[], order: string): YouTubeVideoData[] {
    if (!items) return [];
    return items.sort((a, b) => {
      return order === 'asc'
        ? +(a.statistics?.viewCount ?? 0) - +(b.statistics?.viewCount ?? 0)
        : +(b.statistics?.viewCount ?? 0) - +(a.statistics?.viewCount ?? 0);
    });
  }
}
