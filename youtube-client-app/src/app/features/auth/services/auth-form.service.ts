import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/features/auth/services/auth.service';
import { authPasswordValidator } from 'app/features/auth/utilits/auth-password.validator';

@Injectable({
  providedIn: 'root',
})
export class AuthFormService {
  public loginForm!: FormGroup;

  private initLoginFormState: unknown;

  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder,
  ) {}

  public initForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, , authPasswordValidator()]],
    });
    this.initLoginFormState = this.loginForm.value;
  }

  public onReset(): void {
    this.loginForm.reset(this.initLoginFormState);
  }

  public onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password);
    }
  }
}
