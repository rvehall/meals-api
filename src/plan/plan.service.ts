import { Injectable } from '@nestjs/common';
import IdeasModel from 'src/models/idea.model';
import PlanModel from 'src/models/plan.model';

const plans: PlanModel[] = [];
const plan: PlanModel = new PlanModel();

@Injectable()
export class PlanService {
  getPlans(): PlanModel[] {
    return plans;
  }
  getPlanById(id: string): PlanModel {
    return plan;
  }
  updatePlan(plan: PlanModel): boolean {
    return true;
  }
  addPlan(plan: PlanModel): boolean {
    return true;
  }
  deletePlan(plan: PlanModel): boolean {
    return true;
  }
  addIdeaToPlan(planId: string, idea: IdeasModel): boolean {
    return true;
  }
}
