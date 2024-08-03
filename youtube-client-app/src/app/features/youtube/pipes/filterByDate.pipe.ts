import { Pipe, PipeTransform } from '@angular/core';
import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';


@Pipe({
  name: 'filterByDate',
  standalone: true,
})
export class FilterByDatePipe implements PipeTransform {
  public transform(
    items: YouTubeVideoDetailsData[],
    order: string,
  ): YouTubeVideoDetailsData[] {
    return (
      items?.sort((a, b) => {
        const dateA = new Date(a.snippet.publishedAt).getTime();
        const dateB = new Date(b.snippet.publishedAt).getTime();
        return order === 'asc' ? dateA - dateB : dateB - dateA;
      }) || []
    );
  }
}
