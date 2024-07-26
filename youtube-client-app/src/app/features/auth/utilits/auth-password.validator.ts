import { ValidatorFn } from '@angular/forms';
import { customValidator } from 'app/shared/utilits/custom-validator';
import { PASSWORD_CONDITIONS } from 'app/features/auth/models/password-conditions';


export function authPasswordValidator(): ValidatorFn {
  return customValidator(PASSWORD_CONDITIONS);
}
