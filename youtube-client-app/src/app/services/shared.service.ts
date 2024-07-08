import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private filterTitle = new BehaviorSubject<string>('');

  private filterDate = new BehaviorSubject<string>('');

  filterTitle$ = this.filterTitle.asObservable();

  filterDate$ = this.filterDate.asObservable();

  setFilterTitle(value: string) {
    this.filterTitle.next(value);
  }

  setFilterDate(value: string) {
    this.filterDate.next(value);
  }
}
