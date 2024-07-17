import { Pipe, PipeTransform } from '@angular/core';
import { YouTubeVideoData } from 'app/interfaces/youtube-video-data.interface';

@Pipe({
  name: 'filterByDate',
  // pure: false,
  standalone: true,
})
export class FilterByDatePipe implements PipeTransform {
  transform(items: YouTubeVideoData[], order: string): YouTubeVideoData[] {
    if (!items) return [];
    return items.sort((a, b) => {
      const dateA = new Date(a.snippet.publishedAt);
      const dateB = new Date(b.snippet.publishedAt);
      return order === 'asc'
        ? dateA.getTime() - dateB.getTime()
        : dateB.getTime() - dateA.getTime();
    });
  }
}
