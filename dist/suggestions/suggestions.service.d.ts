import SuggestionModel from '../models/suggestion.model';
export declare class SuggestionsService {
    getSuggestions(query: any): Promise<any>;
    getSuggestionById(id: string): Promise<SuggestionModel>;
    updateSuggestion(suggestion: SuggestionModel): Promise<any>;
    addSuggestion(suggestion: SuggestionModel): Promise<string>;
    addSuggestions(suggestions: SuggestionModel[]): Promise<string[]>;
    deleteSuggestion(suggestion: SuggestionModel): Promise<any>;
}
