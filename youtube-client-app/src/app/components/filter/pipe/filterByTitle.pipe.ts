import { Pipe, PipeTransform } from '@angular/core';
import { YouTubeVideoData } from 'app/interfaces/youtube-video-data.interface';

@Pipe({
  name: 'filterByTitle',
  // pure: false,
  standalone: true,
})
export class FilterByTitlePipe implements PipeTransform {
  transform(items: YouTubeVideoData[], searchText: string): YouTubeVideoData[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter((item) =>
      item.snippet.title.toLowerCase().includes(searchText),
    );
  }
}
