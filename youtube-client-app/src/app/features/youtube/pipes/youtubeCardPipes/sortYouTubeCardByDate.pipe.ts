import { Pipe, PipeTransform } from '@angular/core';
import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';

@Pipe({
  name: 'sortYouTubeByDate',
  standalone: true,
})
export class SortYouTubeByDatePipe implements PipeTransform {
  public transform(
    items: YouTubeVideoDetailsData[] | null,
    sortOrder: string = 'asc',
  ): YouTubeVideoDetailsData[] {
    if (!items) return [];

    return [...items].sort((a, b) => {
      const dateA = new Date(a.snippet.publishedAt).getTime();
      const dateB = new Date(b.snippet.publishedAt).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }
}
