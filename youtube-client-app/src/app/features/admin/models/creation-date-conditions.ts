import { CustomCondition } from 'app/shared/models/custom-condition.interface';

export const CHECK_CREATION_DATE: CustomCondition[] = [
  {
    condition: (date: string) => new Date(date) <= new Date(),
    message: 'The creation date is invalid',
  },
];
