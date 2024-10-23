import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../../auth/services/auth.service';
import { getProfileForm } from '../../utils/get-profile-form';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
})
export class ProfileFormComponent implements OnInit {
  private authService = inject(AuthService);

  private fb = inject(FormBuilder);

  public form = this.fb.group({});

  async ngOnInit() {
    const username = await this.getUsername();
    const email = await this.getEmail();
    const password = await this.getPassword();
    this.form = getProfileForm(this.fb, { username, email, password });
  }

  private async getUsername(): Promise<string> {
    const authData = await this.authService.getAuthData();

    return authData?.credentials?.userName || 'Guest';
  }

  private async getEmail(): Promise<string> {
    const authData = await this.authService.getAuthData();
    return authData?.credentials?.email || 'Guest';
  }

  private async getPassword(): Promise<string> {
    const authData = await this.authService.getAuthData();
    return authData?.credentials?.password || '';
  }
}
