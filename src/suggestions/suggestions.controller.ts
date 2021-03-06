import { Body, Param, Query, UseGuards } from '@nestjs/common';
import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import SuggestionModel from '../models/suggestion.model';
import { SuggestionsService } from './suggestions.service';
import { FirebaseAuthGuard } from '../firebase/firebase-auth.guard';

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
  @UseGuards(FirebaseAuthGuard)
  createSuggestion(@Body() suggestion: SuggestionModel): Promise<string> {
    return this.suggestionsService.addSuggestion(suggestion);
  }
  @Post('bulk')
  @UseGuards(FirebaseAuthGuard)
  createSuggestions(@Body() suggestions: SuggestionModel[]): Promise<string[]> {
    return this.suggestionsService.addSuggestions(suggestions);
  }
  @Put()
  @UseGuards(FirebaseAuthGuard)
  updateSuggestion(@Body() suggestion: SuggestionModel): Promise<any> {
    return this.suggestionsService.updateSuggestion(suggestion);
  }
  @Delete(':id')
  @UseGuards(FirebaseAuthGuard)
  deleteSuggestion(@Param('id') id: string): Promise<boolean> {
    return this.suggestionsService.deleteSuggestion(id);
  }
}
