import { CustomCondition } from 'app/shared/models/custom-condition';


export const PASSWORD_CONDITIONS: CustomCondition[] = [
  {
    condition: (password: string) => /[A-Z]/.test(password),
    message: 'Password must contain at least one uppercase English letter.',
  },
  {
    condition: (password: string) => /[a-z]/.test(password),
    message: 'Password must contain at least one lowercase English letter.',
  },
  {
    condition: (password: string) => /\d/.test(password),
    message: 'Password must contain at least one digit.',
  },
  {
    condition: (password: string) => /[!@#?]/.test(password),
    message:
      'Password must contain at least one special character (!, @, #, ?).',
  },
  {
    condition: (password: string) => password.length >= 8,
    message: 'Password must be at least 8 characters long.',
  },
];
