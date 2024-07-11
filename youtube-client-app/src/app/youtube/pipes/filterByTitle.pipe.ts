import { Pipe, PipeTransform } from '@angular/core';
import { Item } from 'app/youtube/interfaces/youtube-response.interface';

@Pipe({
  name: 'filterByTitle',
  // pure: false,
  standalone: true,
})
export class FilterByTitlePipe implements PipeTransform {
  transform(items: Item[], searchText: string): Item[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter((item) =>
      item.snippet.title.toLowerCase().includes(searchText),
    );
  }
}
