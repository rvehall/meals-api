import { Test, TestingModule } from '@nestjs/testing';
import { MealController } from './Meal.controller';
import { MealService } from './Meal.service';

describe('MealController', () => {
  let MealController: MealController;

  beforeEach(async () => {
    const Meal: TestingModule = await Test.createTestingModule({
      controllers: [MealController],
      providers: [MealService],
    }).compile();

    MealController = Meal.get<MealController>(MealController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(MealController.getMeals()).toBe('Hello World!');
    });
  });
});
