import { Pipe } from '@angular/core';
import { AbstractFilterByTitlePipe } from 'app/features/youtube/pipes/abstractFilterByTitle.pipe';
import { CustomCard } from 'app/features/youtube/models/custom-card.interface';

@Pipe({
  name: 'filterCustomByTitle',
  standalone: true,
})
export class FilterCustomCardByTitlePipe extends AbstractFilterByTitlePipe<CustomCard> {
  protected getTitle(item: CustomCard): string {
    return item.title;
  }
}
