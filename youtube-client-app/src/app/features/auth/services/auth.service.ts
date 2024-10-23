import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);

  private lsService = inject(LocalStorageService);

  private KEY: string = 'userCredentials';

  public userName = signal<string>('Guest');

  public userData = signal<object>({});

  private authStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    this.isAuth(),
  );

  public login(credentials: {
    userName: string;
    email: string;
    password: string;
  }) {
    this.lsService.set(this.KEY, { credentials });
    this.authStatus.next(this.isAuth());
    this.userName.set(credentials.userName);
    this.userData.set(credentials);
    this.router.navigate(['/greeting']);
  }

  public logout() {
    this.lsService.remove(this.KEY);
    this.authStatus.next(this.isAuth());
    this.userName.set('Guest');
    this.userData.set({});
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
