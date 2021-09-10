import { Injectable } from '@nestjs/common';
import admin from 'firebase-admin';
import IdeasModel from '../models/idea.model';
import MealModel from '../models/meal.model';

@Injectable()
export class MealService {
  async getMeals(): Promise<any[]> {
    const snapshot = await admin.firestore().collection('meals').get();
    const data = snapshot.docs.map((doc) => {
      return { id: doc.id, data: doc.data() };
    });
    return data;
  }
  async getMealsByDate(date: string): Promise<any[]> {
    const snapshot = await admin
      .firestore()
      .collection('meals')
      .where('date', '==', date)
      .get();
    const data = snapshot.docs.map((doc) => {
      return { id: doc.id, data: doc.data() };
    });
    return data;
  }
  async getMealById(id: string): Promise<MealModel> {
    const meal = new MealModel();
    const snapshot = await admin.firestore().collection('meals').doc(id).get();
    meal.id = snapshot.id;
    meal.date = snapshot.data().date;
    meal.meal = snapshot.data().date;
    meal.name = snapshot.data().name;
    meal.createdBy = snapshot.data().createdBy;
    meal.createdWhen = snapshot.data().createdWhen;
    meal.modifiedBy = snapshot.data().modifiedBy;
    meal.modifiedWhen = snapshot.data().modifiedWhen;
    return meal;
  }
  async updateMeal(meal: MealModel): Promise<any> {
    const res = await admin
      .firestore()
      .collection('meals')
      .doc(meal.id)
      .set(meal);
    return res.writeTime;
  }
  async addMeal(meal: MealModel): Promise<string> {
    const res = await admin.firestore().collection('meals').add(meal);
    return res.id;
  }
  async deleteMeal(meal: MealModel): Promise<any> {
    const res = await admin
      .firestore()
      .collection('Meal')
      .doc(meal.id)
      .delete();
    return res.writeTime;
  }
}
