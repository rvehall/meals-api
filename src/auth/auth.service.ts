import { Injectable } from '@nestjs/common';
import admin from 'firebase-admin';
import SuggestionModel from '../models/suggestion.model';
import * as _ from 'lodash';
import * as auth from 'firebase/auth';

@Injectable()
export class AuthService {
  async signup(user: any): Promise<any> {
    const getAuth = auth.getAuth()
    return auth.createUserWithEmailAndPassword(getAuth, user.email, user.password).then(({user}) =>  user);
  }
  async signin(user: any): Promise<any> {
      const getAuth = auth.getAuth()
      return auth.signInWithEmailAndPassword(getAuth, user.email, user.password).then(({user}) =>  user);
}
}
