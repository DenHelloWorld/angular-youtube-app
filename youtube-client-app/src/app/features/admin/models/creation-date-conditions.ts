import { CustomCondition } from 'app/shared/models/custom-condition';

export const CREATION_DATE_CONDITIONS: CustomCondition[] = [
  {
    condition: (date: string) => new Date(date) <= new Date(),
    message: 'The date is invalid',
  },
];

