import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emaildValidator } from '../../auth/utilits/auth-email.validator';
import { authPasswordValidator } from '../../auth/utilits/auth-password.validator';

export const getProfileForm = (
  fb: FormBuilder,
  values: { username: string; email: string; password: string },
): FormGroup => {
  return fb.group({
    username: [values.username || '', [Validators.required]],
    email: [values.email || '', [Validators.required, emaildValidator()]],
    password: [values.password || '', [Validators.required, authPasswordValidator()]],
  });
};
