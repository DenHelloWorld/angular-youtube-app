import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private filterTitle = new BehaviorSubject<string>('');

  private filterDate = new BehaviorSubject<string>('');

  private filterView = new BehaviorSubject<string>('');

  public filterTitle$ = this.filterTitle.asObservable();

  public filterDate$ = this.filterDate.asObservable();

  public filterView$ = this.filterView.asObservable();

  public setFilterTitle(value: string) {
    this.filterTitle.next(value);
  }

  public setFilterDate(value: string) {
    this.filterDate.next(value);
  }

  public setFilterView(value: string) {
    this.filterView.next(value);
  }
}
