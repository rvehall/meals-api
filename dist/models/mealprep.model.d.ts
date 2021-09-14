import SuggestionModel from './suggestion.model';
export default class MealPrepModel {
    id: string;
    date: Date;
    meal: SuggestionModel;
    name: string;
    type: string;
    createdBy: string;
    createdWhen: Date;
    modifiedBy: string;
    modifiedWhen: Date;
}
