import { Controller, Delete, Get, Patch, Post, Put, Param, Body , UseGuards } from '@nestjs/common';
import MealPrepModel from '../models/mealprep.model';
import { MealPrepService } from './mealprep.service';
import { FirebaseAuthGuard } from '../firebase/firebase-auth.guard';

@Controller('preps')
@UseGuards(FirebaseAuthGuard)
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
  createMealPrep(@Body() mealPrep: any): Promise<string> {
    console.log(mealPrep)
    return this.mealPrepService.addMealPrep(mealPrep);
  }
  @Put()
  updateMealPrep(@Body() mealPrep: MealPrepModel): Promise<any> {
    return this.mealPrepService.updateMealPrep(mealPrep);
  }
  @Delete(':id')
  deleteMealPrep(@Param('id') id: string): Promise<any> {
    console.log(id);
    return this.mealPrepService.deleteMealPrep(id);
  }
}
