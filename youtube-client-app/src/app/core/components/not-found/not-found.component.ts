import { Component } from '@angular/core';
import { AuthService } from 'app/features/auth/services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
  constructor(public authService: AuthService) {}

  public isAuth() {
    return this.authService.isAuth() ? 'To main' : 'To Login';
  }
}
