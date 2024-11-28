import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emaildValidator } from '../../auth/utilits/auth-email.validator';
import { authPasswordValidator } from '../../auth/utilits/auth-password.validator';
import {  UserData } from '../../auth/models/user-data.interface';

export const getProfileForm = (
  fb: FormBuilder,
  values: UserData | null,
): FormGroup => {
  return fb.group({
    userName: [values?.userName || '', [Validators.required]],
    email: [
      values?.email || '',
      [Validators.required, emaildValidator()],
    ],
    password: [
      values?.password || '',
      [Validators.required, authPasswordValidator()],
    ],
  });
};
