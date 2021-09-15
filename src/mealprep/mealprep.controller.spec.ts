import { Test, TestingModule } from '@nestjs/testing';
import { MealPrepController } from './mealprep.controller';
import { MealPrepService } from './mealprep.service';

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
      // expect(mealPrepController.getMealPreps()).toBe('Hello World!');
    });
  });
});
