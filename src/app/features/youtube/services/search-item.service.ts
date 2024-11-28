import { inject, Injectable } from '@angular/core';
import { DetailsService } from './details.service';

@Injectable({
  providedIn: 'root',
})
export class SearchItemService {
  private detailsService = inject(DetailsService);

  public openDetails(id: string) {
    this.detailsService.openDetails(id);
  }
}
