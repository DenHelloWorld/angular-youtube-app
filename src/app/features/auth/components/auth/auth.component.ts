import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'app/features/auth/services/auth.service';
import { AuthFormService } from 'app/features/auth/services/auth-form.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit, OnDestroy {
  public authService = inject(AuthService);

  public authFormService = inject(AuthFormService);

  public ngOnInit() {
    this.authFormService.initForm();
  }

  public ngOnDestroy() {
    this.authFormService.onReset();
  }

  public onSubmit() {
    this.authFormService.onSubmit();
  }
}
