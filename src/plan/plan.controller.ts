import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import IdeasModel from 'src/models/idea.model';
import PlanModel from 'src/models/plan.model';
import { PlanService } from './plan.service';

@Controller('plans')
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  @Get()
  getPlans(): PlanModel[] {
    return this.planService.getPlans();
  }
  @Get()
  getPlanById(id: string): PlanModel {
    return this.planService.getPlanById(id);
  }
  @Post()
  createPlan(idea: PlanModel): boolean {
    return this.planService.addPlan(idea);
  }
  @Put()
  updatePlan(idea: PlanModel): boolean {
    return this.planService.updatePlan(idea);
  }
  @Patch()
  addIdeaToPlan(id: string, idea: IdeasModel): boolean {
    return this.planService.addIdeaToPlan(id, idea);
  }
  @Delete()
  deletePlan(idea: PlanModel): boolean {
    return this.planService.deletePlan(idea);
  }
}
