import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'app/features/auth/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {

  public loginForm: FormGroup = this.formBuilder.group({
    username: [''],
    password: [''],
  });

  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder,
  ) {}

  public onSubmit() {
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password);
  }
}
