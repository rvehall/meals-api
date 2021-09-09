import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdeaController } from './ideas/idea.controller';
import { IdeaService } from './ideas/idea.service';
import { PlanController } from './plan/plan.controller';
import { PlanService } from './plan/plan.service';

@Module({
  imports: [],
  controllers: [AppController, IdeaController, PlanController],
  providers: [AppService, IdeaService, PlanService],
})
export class AppModule {}
