import { Pipe, PipeTransform } from '@angular/core';
import { YouTubeVideoData } from 'app/features/youtube/models/youtube-video-data.interface';

@Pipe({
  name: 'filterByTitle',
  standalone: true,
})
export class FilterByTitlePipe implements PipeTransform {
  public transform(
    items: YouTubeVideoData[],
    searchText: string,
  ): YouTubeVideoData[] {
    if (!items || !searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter((item) =>
      item.snippet.title.toLowerCase().includes(searchText),
    );
  }
}
