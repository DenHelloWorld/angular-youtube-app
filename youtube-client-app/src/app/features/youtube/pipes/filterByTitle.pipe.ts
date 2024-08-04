import { Pipe, PipeTransform } from '@angular/core';
import { YouTubeVideoDetailsData } from 'app/features/youtube/models/youtube-video-detalis.interface';

@Pipe({
  name: 'filterByTitle',
  standalone: true,
})
export class FilterByTitlePipe implements PipeTransform {
  public transform(
    items: YouTubeVideoDetailsData[],
    searchText: string,
  ): YouTubeVideoDetailsData[] {
    if (!items || !searchText) return items;
    searchText = searchText.toLowerCase();
    return [...items].filter((item) =>
      item.snippet.title.toLowerCase().includes(searchText),
    );
  }
}
