import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private filterInputValueSubject = new BehaviorSubject<string>('');

  filterInputValue$ = this.filterInputValueSubject.asObservable();

  setFilterInputValue(value: string) {
    this.filterInputValueSubject.next(value);
  }
}
