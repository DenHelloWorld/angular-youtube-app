import { Component, effect, inject, OnInit } from '@angular/core';
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

  constructor() {
    effect(() => {
      this.form = getProfileForm(this.fb, this.authService.userData());
    });
  }

  ngOnInit(): void {
    this.authService.getUserData();
  }
}
