import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdeaController } from './ideas/idea.controller';
import { IdeaService } from './ideas/idea.service';
import { MealController } from './Meal/Meal.controller';
import { MealService } from './Meal/Meal.service';

@Module({
  imports: [],
  controllers: [AppController, IdeaController, MealController],
  providers: [AppService, IdeaService, MealService],
})
export class AppModule {}
