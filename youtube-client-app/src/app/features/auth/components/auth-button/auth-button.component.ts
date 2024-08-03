import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/features/auth/services/auth.service';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  standalone: true,
  imports: [CustomButtonComponent],
})
export class AuthButtonComponent
  extends CustomButtonComponent
  implements OnInit, OnDestroy {
  private isAuthenticated: boolean = false;

  private authStatusSubscription?: Subscription;

  constructor(private authService: AuthService, private router: Router) {
    super();
  }

  public ngOnInit(): void {
    this.authStatusSubscription = this.authService
      .getAuthStatus()
      .subscribe((status) => {
        this.isAuthenticated = status;
      });
  }

  public ngOnDestroy(): void {
    this.authStatusSubscription?.unsubscribe();
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
