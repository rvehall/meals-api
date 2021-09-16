import SuggestionModel from '../models/suggestion.model';
import { SuggestionsService } from './suggestions.service';
export declare class SuggestionsController {
    private readonly suggestionsService;
    constructor(suggestionsService: SuggestionsService);
    getSuggestions(query: any): Promise<any>;
    getSuggestionById(id: string): Promise<SuggestionModel>;
    createSuggestion(suggestion: SuggestionModel): Promise<string>;
    createSuggestions(suggestions: SuggestionModel[]): Promise<string[]>;
    updateSuggestion(suggestion: SuggestionModel): Promise<any>;
    deleteSuggestion(id: string): Promise<boolean>;
}
