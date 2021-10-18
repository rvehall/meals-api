import { Injectable } from '@nestjs/common';
import admin from 'firebase-admin';

@Injectable()
export class AuthService {
  getHello(): string {
    return 'Hello World!';
  }

  async verifyToken(idToken: string): Promise<any> {
    const date = Math.round(Date.now() / 1000);
    const res = await admin
      .auth()
      .verifyIdToken(idToken)
    const dr = await res;
    const response = {
      isLoggedIn: date < dr.exp,
      uid: dr.uid,
      photo: dr.picture,
      email: dr.email,
      isVerified: dr.email_verified
    }

    return response;
  }
}
