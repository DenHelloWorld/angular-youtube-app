import { Injectable } from '@angular/core';
import { DetailsService } from './details.service';

@Injectable({
  providedIn: 'root',
})
export class SearchItemService {
  constructor(private detailsService: DetailsService) {}

  openDetails(id: string) {
    this.detailsService.openDetails(id);
  }
}
