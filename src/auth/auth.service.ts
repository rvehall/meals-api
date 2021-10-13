import { Injectable } from '@nestjs/common';
import admin from 'firebase-admin';
import { logger } from 'handlebars';

@Injectable()
export class AuthService {
  getHello(): string {
    return 'Hello World!';
  }

  async verifyToken(id: string): Promise<any> {
      admin.auth().verifyIdToken(id)
        .then((res: any) => res)
        .catch((err: any) => {
            logger.log(1, err);
        })
  }
}
