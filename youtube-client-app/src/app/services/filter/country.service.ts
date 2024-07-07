import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private countries = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'United', code: 'US' },
  ];

  getCountries() {
    return this.countries;
  }
}
