import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { authPasswordValidator } from 'app/features/auth/guards/auth-password.validator';
import { AuthService } from 'app/features/auth/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder,
  ) {}

  public ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, authPasswordValidator]],
    });
  }

  public onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password);
    }
  }
}
