import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emaildValidator } from '../../auth/utilits/auth-email.validator';
import { authPasswordValidator } from '../../auth/utilits/auth-password.validator';
import { Credentials } from '../../auth/models/user-data.interface';

export const getProfileForm = (
  fb: FormBuilder,
  values: {
    credentials?: Credentials;
  } | null,
): FormGroup => {
  return fb.group({
    userName: [values?.credentials?.userName || '', [Validators.required]],
    email: [
      values?.credentials?.email || '',
      [Validators.required, emaildValidator()],
    ],
    password: [
      values?.credentials?.password || '',
      [Validators.required, authPasswordValidator()],
    ],
  });
};
