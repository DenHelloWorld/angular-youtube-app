import { Component, effect, inject, OnInit } from '@angular/core';

import { AuthService } from 'app/features/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  public authService = inject(AuthService);

  public userName?: string = 'Guest';

  constructor() {
    effect(() => {
      this.userName = this.authService.userData().userName;
    });
  }

  ngOnInit(): void {
    this.authService.getUserData();
  }
}
