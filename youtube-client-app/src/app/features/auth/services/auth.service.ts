import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserData } from '../models/user-data.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);

  private lsService = inject(LocalStorageService);

  public KEY: string = 'userCredentials';

  public userName = signal<string>('Guest');

  public initialUserData: UserData = {
    credentials: {
      userName: '',
      email: '',
      password: '',
    },
  };

  public userData = signal<UserData>({ ...this.initialUserData });

  private authStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    this.isAuth(),
  );

  public login(userData: UserData) {
    this.lsService.set(this.KEY, { userData });
    this.authStatus.next(this.isAuth());
    this.userName.set(userData.credentials.userName);
    this.userData.set(userData);
    this.router.navigate(['/greeting']);
  }

  public logout() {
    this.lsService.remove(this.KEY);
    this.authStatus.next(this.isAuth());
    this.userName.set('Guest');
    this.userData.set({ ...this.initialUserData });
    this.router.navigate(['/login']);
  }

  public isAuth(): boolean {
    return this.lsService.get(this.KEY) !== null;
  }

  public getAuthStatus(): Observable<boolean> {
    return this.authStatus.asObservable();
  }

  public async getUserData() {
    const userData = await this.lsService.get(this.KEY);
    this.userData.set(userData);
  }

  public async getUserName() {
    const authData = await this.lsService.get(this.KEY);
    const username = authData?.credentials?.userName || 'Guest';
    this.userName.set(username);
  }
}
