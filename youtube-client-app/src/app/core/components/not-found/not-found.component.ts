import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/features/auth/services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent implements OnInit {
  private isAuthenticated: boolean = false;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authService.getAuthStatus().subscribe((status) => {
      this.isAuthenticated = status;
    });
  }

  public isAuth() {
    return this.isAuthenticated ? 'To main' : 'To Login';
  }
}
