import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'app/features/auth/services/auth.service';
import { AuthFormService } from 'app/features/auth/services/auth-form.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit, OnDestroy {
  constructor(
    public authService: AuthService,
    public authFormService: AuthFormService,
  ) {}

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
