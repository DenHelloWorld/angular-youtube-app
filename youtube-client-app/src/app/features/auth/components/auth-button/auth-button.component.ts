import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/features/auth/services/auth.service';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  standalone: true,
  imports: [CustomButtonComponent],
})
export class AuthButtonComponent
  extends CustomButtonComponent
  implements OnInit {
  private isAuthenticated: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.authService.getAuthStatus().subscribe((status) => {
      this.isAuthenticated = status;
    });
  }

  public authIcon(): string {
    return this.isAuthenticated ? 'pi-sign-out' : 'pi-sign-in';
  }

  public authProcess(): void {
    if (this.isAuthenticated) {
      this.authService.logout();
    } else {
      this.router.navigate(['/login']);
    }
  }
}
