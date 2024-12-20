import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';
import { UserData } from '../models/user-data.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);

  private lsService = inject(LocalStorageService);

  public KEY: string = 'userCredentials';

  public initialUserData: UserData = {
    userName: '',
    email: '',
    password: '',
  };

  public userData = signal<UserData>(this.initialUserData);

  public authStatus = signal<boolean>(this.isAuth());

  public login(userData: UserData) {
    this.lsService.set(this.KEY, userData);
    this.authStatus.set(this.isAuth());
    this.userData.set(userData);
    this.router.navigate(['/greeting']);
  }

  public logout() {
    this.lsService.remove(this.KEY);
    this.authStatus.set(this.isAuth());
    this.userData.set({ ...this.initialUserData });
    this.router.navigate(['/login']);
  }

  public isAuth(): boolean {
    return this.lsService.get(this.KEY) !== null;
  }

  public async getUserData() {
    const userData = await this.lsService.get(this.KEY);
    this.userData.set(userData);
  }
}
