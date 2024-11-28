import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/features/auth/services/auth.service';
import { emaildValidator } from 'app/features/auth/utilits/auth-email.validator';
import { authPasswordValidator } from 'app/features/auth/utilits/auth-password.validator';

@Injectable({
  providedIn: 'root',
})
export class AuthFormService {
  public loginForm!: FormGroup;

  private initLoginFormState: unknown;

  public authService = inject(AuthService);

  public formBuilder = inject(FormBuilder);

  public initForm(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, emaildValidator()]],
      password: ['', [Validators.required, , authPasswordValidator()]],
    });
    this.initLoginFormState = this.loginForm.value;
  }

  public onReset(): void {
    this.loginForm.reset(this.initLoginFormState);
  }

  public onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value);
    }
  }
}
