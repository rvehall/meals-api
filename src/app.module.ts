import { Module } from '@nestjs/common';
import { FirebaseAuthStrategy } from './firebase/firebase-auth.strategy';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SuggestionsController } from './suggestions/suggestions.controller';
import { MealPrepController } from './mealprep/mealprep.controller';

import { SuggestionsService } from './suggestions/suggestions.service';
import { MealPrepService } from './mealprep/mealprep.service';

import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController, SuggestionsController, MealPrepController, AuthController],
  providers: [AppService, SuggestionsService, MealPrepService, AuthService, FirebaseAuthStrategy],
})
export class AppModule {}
