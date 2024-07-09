import { Pipe, PipeTransform } from '@angular/core';
import { Item } from 'app/interfaces/youtube-response.interface';

@Pipe({
  name: 'filterByDate',
  // pure: false,
  standalone: true,
})
export class FilterByDatePipe implements PipeTransform {

  transform(items: Item[], order: string): Item[] {
    if (!items) return [];
    return items.sort((a, b) => {
      const dateA = new Date(a.snippet.publishedAt);
      const dateB = new Date(b.snippet.publishedAt);
      return order === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    });
  }

}
