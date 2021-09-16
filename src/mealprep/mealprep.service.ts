import { Injectable } from '@nestjs/common';
import admin from 'firebase-admin';
import SuggestionModel from '../models/suggestion.model';
import MealPrepModel from '../models/mealprep.model';

@Injectable()
export class MealPrepService {
  async getMealPreps(): Promise<any[]> {
    const snapshot = await admin.firestore().collection('mealPreps').get();
    const mealPreps = snapshot.docs.map((doc) => {
      return { id: doc.id, data: doc.data() };
    });
    return mealPreps ? mealPreps : [];
  }
  async getMealPrepsByDate(date: string): Promise<any[]> {
    const snapshot = await admin
      .firestore()
      .collection('mealPreps')
      .where('date', '==', date)
      .get();
    const mealPreps = snapshot.docs.map((doc) => {
      return { id: doc.id, data: doc.data() };
    });
    return mealPreps ? mealPreps : [];
  }
  async getMealPrepById(id: string): Promise<MealPrepModel> {
    const mealPrep = new MealPrepModel();
    const snapshot = await admin.firestore().collection('mealPreps').doc(id).get();
    mealPrep.id = snapshot.id;
    mealPrep.date = snapshot.data().date;
    mealPrep.meal = snapshot.data().meal;
    mealPrep.name = snapshot.data().name;
    mealPrep.type = snapshot.data().type;
    mealPrep.createdBy = snapshot.data().createdBy;
    mealPrep.createdWhen = snapshot.data().createdWhen;
    mealPrep.modifiedBy = snapshot.data().modifiedBy;
    mealPrep.modifiedWhen = snapshot.data().modifiedWhen;
    return mealPrep ? mealPrep : new MealPrepModel();
  }
  async updateMealPrep(mealPrep: MealPrepModel): Promise<any> {
    const res = await admin
      .firestore()
      .collection('mealPreps')
      .doc(mealPrep.id)
      .set(mealPrep);
    return res.writeTime;
  }
  async addMealPrep(mealPrep: MealPrepModel): Promise<string> {
    const res = await admin.firestore().collection('mealPreps').add(mealPrep);
    return res.id;
  }
  async deleteMealPrep(mealPrep: MealPrepModel): Promise<any> {
    const res = await admin
      .firestore()
      .collection('MealPrep')
      .doc(mealPrep.id)
      .delete();
    return res.writeTime;
  }
}
