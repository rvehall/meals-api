import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebaseAuthStrategy } from './firebase/firebase-auth.strategy';
import { ResourcesModule } from './resources/resources.module';

import { ConfigModule } from '@nestjs/config';
import { SuggestionsController } from './suggestions/suggestions.controller';
import { MealPrepController } from './mealprep/mealprep.controller';
import { SuggestionsService } from './suggestions/suggestions.service';
import { MealPrepService } from './mealprep/mealprep.service';
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController, SuggestionsController, MealPrepController],
  providers: [AppService, SuggestionsService, MealPrepService, FirebaseAuthStrategy],
})
export class AppModule {}
