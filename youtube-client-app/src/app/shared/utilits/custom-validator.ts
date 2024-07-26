import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CustomCondition } from 'app/shared/models/custom-condition';

export const customValidator: (
  customConditions: CustomCondition[]
) => ValidatorFn = (customConditions: CustomCondition[]): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value || '';
    const errors: { [key: string]: string[] } = { customValidator: [] };

    for (const customCondition of customConditions) {
      if (!customCondition.condition(value)) {
        errors['customValidator'].push(customCondition.message);
      }
    }

    return errors['customValidator'].length > 0 ? errors : null;
  };
};
