import MealPrepModel from '../models/mealprep.model';
export declare class MealPrepService {
    getMealPreps(user: string): Promise<any[]>;
    getMealPrepsByDate(date: string): Promise<any[]>;
    getMealPrepById(id: string): Promise<MealPrepModel>;
    updateMealPrep(mealPrep: MealPrepModel): Promise<any>;
    addMealPrep(mealPrep: MealPrepModel): Promise<string>;
    deleteMealPrep(id: string): Promise<any>;
}
