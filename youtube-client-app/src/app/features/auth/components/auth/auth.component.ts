import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
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
