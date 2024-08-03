import { ValidatorFn } from '@angular/forms';
import { customValidator } from 'app/shared/utilits/custom-validator';
import { CHECK_PASSWORD_CONDITIONS } from 'app/features/auth/models/check-password-conditions';


export function authPasswordValidator(): ValidatorFn {
  return customValidator(CHECK_PASSWORD_CONDITIONS);
}
