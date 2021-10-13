import { Injectable } from '@nestjs/common';
import admin from 'firebase-admin';

@Injectable()
export class AuthService {
  getHello(): string {
    return 'Hello World!';
  }

  async isTokenValid(idToken: string): Promise<any> {
    const date = Math.round(Date.now() / 1000);
    return admin
      .auth()
      .verifyIdToken(idToken)
      .then((decodedToken) => {
        const uid = decodedToken.uid;
        return date < decodedToken.exp;
      })
      .catch((error) => {
        return error
      });
  }
}
