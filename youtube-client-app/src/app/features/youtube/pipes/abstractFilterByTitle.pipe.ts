import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abstractFilterByTitle',
  pure: true,
})
export abstract class AbstractFilterByTitlePipe<T> implements PipeTransform {
  public transform(items: T[] | null, searchText: string): T[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(item => this.getTitle(item).toLowerCase().includes(searchText));
  }

  protected abstract getTitle(item: T): string;
}
