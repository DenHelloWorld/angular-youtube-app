import { CustomCondition } from 'app/shared/models/custom-condition.interface';

export const CHECK_EMAIL: CustomCondition[] = [
  {
    condition: (password: string) =>
      /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/u.test(
        password,
      ),
    message: 'Email must be like x@x.x',
  },
];
