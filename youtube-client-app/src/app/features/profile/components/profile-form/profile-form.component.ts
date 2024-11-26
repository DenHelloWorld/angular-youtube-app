import { Component, effect, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../../auth/services/auth.service';
import { getProfileForm } from '../../utils/get-profile-form';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
})
export class ProfileFormComponent implements OnInit {
  private authService: AuthService = inject(AuthService);

  private fb: FormBuilder = inject(FormBuilder);

  private lsService = inject(LocalStorageService);

  private form: FormGroup;

  public isEditMode: boolean = false;

  constructor() {
    this.form = getProfileForm(this.fb, this.authService.userData());
    effect(() => {
      this.form.patchValue(this.authService.userData());
    });
  }

  public get profaileForm(): FormGroup {
    return this.form;
  }

  public get submitLabel(): string {
    return this.isEditMode ? 'Save' : 'Edit';
  }

  ngOnInit(): void {
    this.form = getProfileForm(this.fb, this.authService.userData());
    this.authService.getUserData().finally(() => {
      this.form.disable();
    });
  }

  async processEdit() {
    if (this.isEditMode) {
      this.lsService.set(this.authService.KEY, this.form.value);
      this.authService.userData.set(this.form.value );
      this.form.disable();
    } else {
      this.form.enable();
    }
    this.isEditMode = !this.isEditMode;
  }
}
