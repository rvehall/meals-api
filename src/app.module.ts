import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuggestionsController } from './suggestions/suggestions.controller';
import { SuggestionsService } from './suggestions/suggestions.service';
import { MealPrepController } from './mealprep/mealprep.controller';
import { MealPrepService } from './mealprep/mealprep.service';

@Module({
  imports: [],
  controllers: [AppController, SuggestionsController, MealPrepController],
  providers: [AppService, SuggestionsService, MealPrepService],
})
export class AppModule {}
