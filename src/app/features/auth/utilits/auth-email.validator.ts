import { ValidatorFn } from '@angular/forms';
import { CHECK_EMAIL } from 'app/features/auth/models/check-email';
import { customValidator } from 'app/shared/utilits/custom-validator';

export function emaildValidator(): ValidatorFn {
  return customValidator(CHECK_EMAIL);
}
