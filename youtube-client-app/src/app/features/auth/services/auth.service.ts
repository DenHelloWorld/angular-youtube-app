import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private lsService: LocalStorageService) { }

  private KEY: string = 'userCredentials';

  public login(username: string, password: string) {
    const credentials = { username, password };
    this.lsService.set(this.KEY, { credentials });
    this.router.navigate(['/main']);
  }

  public logout() {
    this.lsService.remove(this.KEY);
    this.router.navigate(['/login']);
  }

  public isAuth(): boolean {
    return this.lsService.get(this.KEY) !== null;
  }
}
