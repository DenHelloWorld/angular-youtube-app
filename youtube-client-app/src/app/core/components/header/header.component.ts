import { Component, inject, OnInit } from '@angular/core';
import { SearchStringService } from 'app/core/services/search-string.service';
import { AuthService } from 'app/features/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public searchStringService = inject(SearchStringService);

  public authService = inject(AuthService);

  public userName = this.authService.userName;

  ngOnInit(): void {
    this.authService.getUserName();
  }
}
