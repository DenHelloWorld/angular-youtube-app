import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const authPasswordValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const password = control.value;

  const isValidLatin = /^[A-Za-z0-9!@#?]*$/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#?]/.test(password);

  const isValid =
    password.length >= 8 &&
    isValidLatin &&
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecialChar;

  if (!isValid) {
    const messages = [];
    if (password.length < 8) {
      messages.push('Password must be at least 8 characters long.');
    }
    if (!isValidLatin) {
      messages.push(
        'Password should contain only Latin letters, numbers, and allowed special characters (!, @, #, ?).',
      );
    }
    if (!hasUppercase) {
      messages.push('Password must contain at least one uppercase letter.');
    }
    if (!hasLowercase) {
      messages.push('Password must contain at least one lowercase letter.');
    }
    if (!hasNumber) {
      messages.push('Password must contain at least one number.');
    }
    if (!hasSpecialChar) {
      messages.push(
        'Password must contain at least one special character (e.g., !, @, #, ?).',
      );
    }

    return { PasswordNotStrongEnough: messages.join(' ') };
  }

  return null;
};
