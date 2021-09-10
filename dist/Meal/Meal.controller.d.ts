import MealModel from '../models/Meal.model';
import { MealService } from './Meal.service';
export declare class MealController {
    private readonly mealService;
    constructor(mealService: MealService);
    getMeals(): Promise<any[]>;
    getMealsByDate(date: string): Promise<any[]>;
    getMealById(id: string): Promise<MealModel>;
    createMeal(meal: MealModel): Promise<string>;
    updateMeal(meal: MealModel): Promise<any>;
    deleteMeal(meal: MealModel): Promise<any>;
}
