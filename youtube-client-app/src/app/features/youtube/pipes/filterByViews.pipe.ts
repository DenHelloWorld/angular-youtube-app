import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/youtube-response.model';

@Pipe({
  name: 'filterByViews',
  // pure: false,
  standalone: true,
})
export class FilterByViewsPipe implements PipeTransform {
  transform(items: Item[], order: string): Item[] {
    if (!items) return [];
    return items.sort((a, b) => {
      return order === 'asc'
        ? +(a.statistics?.viewCount ?? 0) - +(b.statistics?.viewCount ?? 0)
        : +(b.statistics?.viewCount ?? 0) - +(a.statistics?.viewCount ?? 0);
    });
  }
}
