import { ValidatorFn } from '@angular/forms';
import { EMAIL_CONDITION } from 'app/features/auth/models/email-condition';
import { customValidator } from 'app/shared/utilits/custom-validator';

export function emaildValidator(): ValidatorFn {
  return customValidator(EMAIL_CONDITION);
}
