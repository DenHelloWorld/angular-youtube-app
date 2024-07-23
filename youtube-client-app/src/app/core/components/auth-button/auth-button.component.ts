import { Component, OnInit } from '@angular/core';
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
  public isAuthIcon: string = 'pi-sign-out';

  constructor(public authService: AuthService) {
    super();
  }

  ngOnInit() {}
}
