import { Component, effect, inject } from '@angular/core';
import { AuthService } from 'app/features/auth/services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
  private isAuthenticated: boolean = false;

  public authService = inject(AuthService);

  constructor() {
    effect(() => {
      this.isAuthenticated = this.authService.authStatus();
    });
  }

  public isAuth() {
    return this.isAuthenticated ? 'To main' : 'To Login';
  }
}
