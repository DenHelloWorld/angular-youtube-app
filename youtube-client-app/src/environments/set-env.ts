import { writeFile } from 'node:fs';
import path from 'node:path';
import 'dotenv/config';

const setEnv = () => {
  const envPath = path.resolve('src', 'environments', 'environment.ts');

  const defaultKey = 'AIzaSyDnOEGL48M32jWSq6zBSR7CBXvL0O5zUus';

  const ytApiKey1 = process.env['YT_API_KEY1'] || defaultKey;
  const ytApiKey2 = process.env['YT_API_KEY2'] || defaultKey;
  const ytApiKey3 = process.env['YT_API_KEY3'] || defaultKey;

  const envConfigFile = `export const environment = {
      API_KEYS: [
    '${ytApiKey1}',
    '${ytApiKey2}',
    '${ytApiKey3}',
  ],
    production: true,
  };
  `;

  writeFile(envPath, envConfigFile, err => {
    if (err) {
      process.stderr.write(err.toString());
      throw err;
    } else {
      process.stdout.write(`Angular environment.ts file generated correctly at ${envPath} \n`);
    }
  });
};

setEnv();
