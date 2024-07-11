import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FiltService {
  showFilter: boolean = false;

  filterInputData: string = '';

  toggleView() {
    this.showFilter = !this.showFilter;
  }
}
