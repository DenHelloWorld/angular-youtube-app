import { Pipe, PipeTransform } from '@angular/core';
import { YouTubeVideoData } from '../models/youtube-video-data.interface';


@Pipe({
  name: 'filterByDate',
  standalone: true,
})
export class FilterByDatePipe implements PipeTransform {
  public transform(items: YouTubeVideoData[], order: string): YouTubeVideoData[] {
    return (
      items?.sort((a, b) => {
        const dateA = new Date(a.snippet.publishedAt).getTime();
        const dateB = new Date(b.snippet.publishedAt).getTime();
        return order === 'asc' ? dateA - dateB : dateB - dateA;
      }) || []
    );
  }
}
