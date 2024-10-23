import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emaildValidator } from '../../auth/utilits/auth-email.validator';
import { authPasswordValidator } from '../../auth/utilits/auth-password.validator';

export const getProfileForm = (
  fb: FormBuilder,
  values: {
    credentials?: { userName?: string; email?: string; password?: string };
  } | null,
): FormGroup => {
  return fb.group({
    username: [values?.credentials?.userName || '', [Validators.required]],
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
