import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private lsService: LocalStorageService) {}

  private KEY: string = 'userCredentials';

  private authStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    this.isAuth(),
  );

  public login(username: string, password: string) {
    const credentials = { username, password };
    this.lsService.set(this.KEY, { credentials });
    this.authStatus.next(this.isAuth());
    this.router.navigate(['/main']);
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
}
