import { Test, TestingModule } from '@nestjs/testing';
import { PlanController } from './plan.controller';
import { PlanService } from './plan.service';

describe('PlanController', () => {
  let planController: PlanController;

  beforeEach(async () => {
    const plan: TestingModule = await Test.createTestingModule({
      controllers: [PlanController],
      providers: [PlanService],
    }).compile();

    planController = plan.get<PlanController>(PlanController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(planController.getPlans()).toBe('Hello World!');
    });
  });
});
