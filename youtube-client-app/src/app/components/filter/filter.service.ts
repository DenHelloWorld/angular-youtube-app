import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FiltService {
  showFilter: boolean = false;

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }
}
