import { Test, TestingModule } from '@nestjs/testing';
import { MealPrepController } from './MealPrep.controller';
import { MealPrepService } from './MealPrep.service';

describe('MealPrepController', () => {
  let mealPrepController: MealPrepController;

  beforeEach(async () => {
    const MealPrep: TestingModule = await Test.createTestingModule({
      controllers: [MealPrepController],
      providers: [MealPrepService],
    }).compile();

    mealPrepController = MealPrep.get<MealPrepController>(MealPrepController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(mealPrepController.getMealPreps()).toBe('Hello World!');
    });
  });
});
