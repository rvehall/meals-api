import { Injectable } from '@nestjs/common';
import admin from 'firebase-admin';
import IdeasModel from 'src/models/idea.model';
import MealModel from 'src/models/meal.model';

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
  async updateMeal(Meal: MealModel): Promise<any> {
    const res = await admin
      .firestore()
      .collection('meals')
      .doc(Meal.id)
      .set(Meal);
    return res.writeTime;
  }
  async addMeal(Meal: MealModel): Promise<string> {
    const res = await admin.firestore().collection('Meal').add(Meal);
    return res.id;
  }
  async deleteMeal(Meal: MealModel): Promise<any> {
    const res = await admin
      .firestore()
      .collection('Meal')
      .doc(Meal.id)
      .delete();
    return res.writeTime;
  }
}
