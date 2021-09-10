import { Body } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import IdeasModel from '../models/idea.model';
import MealModel from '../models/Meal.model';
import { MealService } from './Meal.service';

@Controller('meals')
export class MealController {
  constructor(private readonly mealService: MealService) {}

  @Get()
  getMeals(): Promise<any[]> {
    return this.mealService.getMeals();
  }
  @Get(':date')
  getMealsByDate(@Param('date') date: string): Promise<any[]> {
    return this.mealService.getMealsByDate(date);
  }
  @Get(':id')
  getMealById(@Param('id') id: string): Promise<MealModel> {
    return this.mealService.getMealById(id);
  }
  @Post()
  createMeal(@Body() meal: MealModel): Promise<string> {
    return this.mealService.addMeal(meal);
  }
  @Put()
  updateMeal(@Body() meal: MealModel): Promise<any> {
    return this.mealService.updateMeal(meal);
  }
  @Delete()
  deleteMeal(meal: MealModel): Promise<any> {
    return this.mealService.deleteMeal(meal);
  }
}
