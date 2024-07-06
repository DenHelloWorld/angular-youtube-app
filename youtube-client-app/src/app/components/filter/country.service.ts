import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Регистрируем сервис в корневом инжекторе
})
export class CountryService {
  private countries = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'United', code: 'US' },
    // Добавьте другие страны
  ];

  getCountries() {
    return this.countries;
  }
}
