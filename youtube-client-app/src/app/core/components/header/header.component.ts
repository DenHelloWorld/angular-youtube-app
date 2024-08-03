import { Component } from '@angular/core';
import { SearchStringService } from 'app/core/services/search-string.service';
import { AuthService } from 'app/features/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(
    public searchStringService: SearchStringService,
    public authService: AuthService,
  ) { }
}
