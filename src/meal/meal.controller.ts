import { Body } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import IdeasModel from 'src/models/idea.model';
import MealModel from 'src/models/Meal.model';
import { MealService } from './Meal.service';

@Controller('Meals')
export class MealController {
  constructor(private readonly MealService: MealService) {}

  @Get()
  getMeals(): Promise<any[]> {
    return this.MealService.getMeals();
  }
  @Get(':date')
  getMealsByDate(@Param('date') date: string): Promise<any[]> {
    return this.MealService.getMealsByDate(date);
  }
  @Get(':id')
  getMealById(@Param('id') id: string): Promise<MealModel> {
    return this.MealService.getMealById(id);
  }
  @Post()
  createMeal(@Body() Meal: MealModel): Promise<string> {
    return this.MealService.addMeal(Meal);
  }
  @Put()
  updateMeal(@Body() Meal: MealModel): Promise<any> {
    return this.MealService.updateMeal(Meal);
  }
  @Delete()
  deleteMeal(idea: MealModel): Promise<any> {
    return this.MealService.deleteMeal(idea);
  }
}
