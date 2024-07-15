import { Injectable } from '@angular/core';
import { DetalisService } from './detalis.service';

@Injectable({
  providedIn: 'root',
})
export class SearchItemService {

  constructor(private detalisService: DetalisService) {}

  openDetalis(id: string) {
    this.detalisService.openDetalis(id);
  }
}
