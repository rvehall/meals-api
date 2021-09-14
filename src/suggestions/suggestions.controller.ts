import { Body, Param, Query } from '@nestjs/common';
import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import SuggestionModel from '../models/suggestion.model';
import { SuggestionsService } from './suggestions.service';

@Controller('suggestions')
export class SuggestionsController {
  constructor(private readonly suggestionsService: SuggestionsService) {}

  @Get()
  getSuggestions(@Query() query:any): Promise<any> {
    return this.suggestionsService.getSuggestions(query);
  }
  @Get(':id')
  getSuggestionById(@Param('id') id: string): Promise<SuggestionModel> {
    return this.suggestionsService.getSuggestionById(id);
  }
  @Post()
  createSuggestion(@Body() suggestion: SuggestionModel): Promise<string> {
    return this.suggestionsService.addSuggestion(suggestion);
  }
  @Post('bulk')
  createSuggestions(@Body() suggestions: SuggestionModel[]): Promise<string[]> {
    return this.suggestionsService.addSuggestions(suggestions);
  }
  @Put()
  updateSuggestion(@Body() suggestion: SuggestionModel): Promise<any> {
    return this.suggestionsService.updateSuggestion(suggestion);
  }
  @Delete()
  deleteSuggestion(suggestion: SuggestionModel): Promise<boolean> {
    return this.suggestionsService.deleteSuggestion(suggestion);
  }
}
