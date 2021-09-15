import { NestFactory } from '@nestjs/core';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import * as fs from 'fs';
import { ConfigModule } from '@nestjs/config';

import { AppModule } from './app.module';

ConfigModule.forRoot();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const adminConfig: ServiceAccount = {
    "type": process.env.TYPE,
    "project_id": process.env.PROJECT_ID,
    "private_key_id": process.env.PRIVATE_KEY_ID,
    "private_key": process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
    "client_email": process.env.CLIENT_EMAIL,
    "client_id": process.env.CLIENT_ID,
    "auth_uri": process.env.AUTH_URI,
    "token_uri": process.env.TOKEN_URL,
    "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_x509_CERT_URL,
    "client_x509_cert_url": process.env.CLIENT_x509_CERT_URL
  } as ServiceAccount

  // Initialize the firebase admin app
  admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
    databaseURL: 'meals-97d2d.firebaseapp.com',
  });

  app.enableCors();

  await app.listen(3000);
}
bootstrap();
