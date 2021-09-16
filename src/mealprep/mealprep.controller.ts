import { Body } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import SuggestionModel from '../models/suggestion.model';
import MealPrepModel from '../models/mealprep.model';
import { MealPrepService } from './mealprep.service';

@Controller('preps')
export class MealPrepController {
  constructor(private readonly mealPrepService: MealPrepService) {}

  @Get(':user')
  getMealPreps(@Param('user') user: string): Promise<any[]> {
    return this.mealPrepService.getMealPreps(user);
  }
  @Get(':date')
  getMealPrepsByDate(@Param('date') date: string): Promise<any[]> {
    return this.mealPrepService.getMealPrepsByDate(date);
  }
  @Get(':id')
  getMealPrepById(@Param('id') id: string): Promise<MealPrepModel> {
    return this.mealPrepService.getMealPrepById(id);
  }
  @Post()
  createMealPrep(@Body() mealPrep: MealPrepModel): Promise<string> {
    return this.mealPrepService.addMealPrep(mealPrep);
  }
  @Put()
  updateMealPrep(@Body() mealPrep: MealPrepModel): Promise<any> {
    return this.mealPrepService.updateMealPrep(mealPrep);
  }
  @Delete()
  deleteMealPrep(mealPrep: MealPrepModel): Promise<any> {
    return this.mealPrepService.deleteMealPrep(mealPrep);
  }
}
