import { ValidatorFn } from '@angular/forms';
import { customValidator } from 'app/shared/utilits/custom-validator';
import { CREATION_DATE_CONDITIONS } from 'app/features/admin/models/creation-date-conditions';


export function creationDateValidator(): ValidatorFn {
  return customValidator(CREATION_DATE_CONDITIONS);
}
