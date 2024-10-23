import { inject, Injectable } from '@angular/core';
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

  private authStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isAuth());

  public login(credentials: { userName: string; email: string; password: string }) {
    this.lsService.set(this.KEY, { credentials });
    this.authStatus.next(this.isAuth());
    this.router.navigate(['/greeting']);
  }

  public logout() {
    this.lsService.remove(this.KEY);
    this.authStatus.next(this.isAuth());
    this.router.navigate(['/login']);
  }

  public isAuth(): boolean {
    return this.lsService.get(this.KEY) !== null;
  }

  public getAuthStatus(): Observable<boolean> {
    return this.authStatus.asObservable();
  }

  public async getAuthData(): Promise<{ credentials: { userName: string; password: string; email: string } } | null> {
    return this.lsService.get(this.KEY);
  }
}
