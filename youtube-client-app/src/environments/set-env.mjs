import { writeFile } from 'fs';
import dotenv from 'dotenv';

dotenv.config({
  path: 'src/environments/.env',
});

const setEnv = () => {
  const targetPath = './src/environments/environment.ts';

  const envConfigFile = `export const environment = {
      API_KEYS: [
    '${process.env['YT_API_KEY1']}',
    '${process.env['YT_API_KEY2']}',
    '${process.env['YT_API_KEY3']}',
  ],
    production: true,
  };
  `;

  writeFile(targetPath, envConfigFile, (err) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(
        `Angular environment.ts file generated correctly at ${targetPath} \n`,
      );
    }
  });
};

setEnv();
