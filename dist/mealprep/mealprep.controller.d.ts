import MealPrepModel from '../models/mealprep.model';
import { MealPrepService } from './mealprep.service';
export declare class MealPrepController {
    private readonly mealPrepService;
    constructor(mealPrepService: MealPrepService);
    getMealPreps(user: string): Promise<any[]>;
    getMealPrepsByDate(date: string): Promise<any[]>;
    getMealPrepById(id: string): Promise<MealPrepModel>;
    createMealPrep(mealPrep: any): Promise<string>;
    updateMealPrep(mealPrep: MealPrepModel): Promise<any>;
    deleteMealPrep(id: string): Promise<any>;
}
