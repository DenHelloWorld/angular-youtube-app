import { Injectable } from '@angular/core';
import { DetailsService } from './details.service';

@Injectable({
  providedIn: 'root',
})
export class SearchItemService {
  constructor(private detailsService: DetailsService) {}

  openDetalis(id: string) {
    this.detailsService.openDetalis(id);
  }
}
