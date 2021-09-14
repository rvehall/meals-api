import { NestFactory } from '@nestjs/core';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import * as fs from 'fs';

import { AppModule } from './app.module';
import adminConfigFile from './config/adminConfig.json';

async function bootstrap() {
  const ssl = process.env.SSL === 'true' ? true : false;
  let httpsOptions = null;
  if (ssl) {
    const keyPath = process.env.SSL_KEY_PATH || '';
    const certPath = process.env.SSL_CERT_PATH || '';
    httpsOptions = {
      key: fs.readFileSync(keyPath),
      cert: fs.readFileSync(certPath),
    };
  }
  const app = await NestFactory.create(AppModule, {httpsOptions});

  const port = Number(process.env.PORT) || 3000;
  const hostname = process.env.HOSTNAME || 'localhost';

  const adminConfig: ServiceAccount = adminConfigFile as ServiceAccount;

  // Initialize the firebase admin app
  admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
    databaseURL: 'meals-97d2d.firebaseapp.com',
  });

  app.enableCors();

  await app.listen(port, hostname, () => {
    const address =
      'http' + (ssl ? 's' : '') + '://' + hostname + ':' + port + '/';
    console.log('Listening at ' + address);
  });
}
bootstrap();
