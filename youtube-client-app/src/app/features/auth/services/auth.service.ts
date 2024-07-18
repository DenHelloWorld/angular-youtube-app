import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isUserAuth = false;

  public logout() {
    this.isUserAuth = false;
  }

  public login() {
    this.isUserAuth = true;
  }

  public isAuth(): boolean {
    return this.isUserAuth;
  }
}
