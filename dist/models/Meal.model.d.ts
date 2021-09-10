import IdeasModel from './idea.model';
export default class MealModel {
    id: string;
    date: Date;
    meal: IdeasModel;
    name: string;
    createdBy: string;
    createdWhen: Date;
    modifiedBy: string;
    modifiedWhen: Date;
}
