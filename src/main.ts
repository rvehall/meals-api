import { NestFactory } from '@nestjs/core';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';

import { AppModule } from './app.module';
import adminConfigFile from './config/adminConfig.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const adminConfig: ServiceAccount = adminConfigFile as ServiceAccount;
  // Initialize the firebase admin app
  admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
    databaseURL: 'meals-97d2d.firebaseapp.com',
  });

  app.enableCors();
  await app.listen(3000);
}
bootstrap();
