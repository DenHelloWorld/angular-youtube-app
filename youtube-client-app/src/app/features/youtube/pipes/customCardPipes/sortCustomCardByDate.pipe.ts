import { Pipe, PipeTransform } from '@angular/core';
import { CustomCard } from 'app/features/youtube/models/custom-card.interface';
@Pipe({
  name: 'sortCustomCardByDatePipe',
  standalone: true,
})
export class SortCustomCardByDatePipe implements PipeTransform {
  public transform(
    items: CustomCard[] | null,
    sortOrder: string = 'asc',
  ): CustomCard[] {
    if (!items) return [];

    return [...items].sort((a, b) => {
      const dateA = new Date(a.creationDate).getTime();
      const dateB = new Date(b.creationDate).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }
}
