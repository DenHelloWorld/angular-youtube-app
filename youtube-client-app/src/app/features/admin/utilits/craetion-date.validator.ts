import { ValidatorFn } from '@angular/forms';
import { customValidator } from 'app/shared/utilits/custom-validator';
import { CHECK_CREATION_DATE } from 'app/features/admin/models/creation-date-conditions';


export function creationDateValidator(): ValidatorFn {
  return customValidator(CHECK_CREATION_DATE);
}
