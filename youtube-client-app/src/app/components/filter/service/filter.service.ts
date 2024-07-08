import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FiltService {
  showFilter: boolean = false;

  toggleView() {
    this.showFilter = !this.showFilter;
  }
}
