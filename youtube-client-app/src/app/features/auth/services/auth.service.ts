import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  public login(username: string, password: string) {
    const credentials = { username, password };
    localStorage.setItem('userCredentials', JSON.stringify(credentials));
    this.router.navigate(['/main']);
  }

  public logout() {
    localStorage.removeItem('userCredentials');
    this.router.navigate(['/login']);
  }

  public isAuth(): boolean {
    return localStorage.getItem('userCredentials') !== null;
  }
}
