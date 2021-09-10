import MealModel from '../models/meal.model';
export declare class MealService {
    getMeals(): Promise<any[]>;
    getMealsByDate(date: string): Promise<any[]>;
    getMealById(id: string): Promise<MealModel>;
    updateMeal(meal: MealModel): Promise<any>;
    addMeal(meal: MealModel): Promise<string>;
    deleteMeal(meal: MealModel): Promise<any>;
}
