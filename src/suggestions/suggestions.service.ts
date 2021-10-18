import { Injectable } from '@nestjs/common';
import admin from 'firebase-admin';
import SuggestionModel from '../models/suggestion.model';
import * as _ from 'lodash';

@Injectable()
export class SuggestionsService {
  async getSuggestions(query: any): Promise<any> {
    const snapshot = await admin.firestore().collection('ideas').get();
    const data = snapshot.docs.map((doc) => {
      return doc.data();
    });

    return data ? data : []; 
  }
  async getSuggestionById(id: string): Promise<SuggestionModel> {
    console.log(id);
    const suggestion = new SuggestionModel();
    const snapshot = await admin
      .firestore()
      .collection('ideas')
      .doc(id)
      .get();
    suggestion.id = snapshot.data().id;
    suggestion.photo = snapshot.data().photo;
    suggestion.tags = snapshot.data().tags;
    suggestion.ingredients = snapshot.data().ingredients;
    suggestion.name = snapshot.data().name;
    suggestion.createdBy = snapshot.data().createdBy;
    suggestion.createdWhen = snapshot.data().createdWhen;
    suggestion.modifiedBy = snapshot.data().modifiedBy;
    suggestion.modifiedWhen = snapshot.data().modifiedWhen;

    return suggestion ? suggestion : new SuggestionModel();
  }

  async updateSuggestion(suggestion: SuggestionModel): Promise<any> {
    const res = await admin
      .firestore()
      .collection('ideas')
      .doc(suggestion.id)
      .set(suggestion);
    return res.writeTime;
  }
  async addSuggestion(suggestion: SuggestionModel): Promise<string> {
    const res = await admin.firestore().collection('ideas').doc();
    suggestion.id = res.id;
    res.set(suggestion);
    return suggestion.id;
  }
  async addSuggestions(suggestions: SuggestionModel[]): Promise<string[]> {
    const ids = [];
    suggestions.forEach(async (suggestion) => {
      const res = await admin.firestore().collection('ideas').doc();
      suggestion.id = res.id;
      res.set(suggestion);
      ids.push(suggestion.id);
    });
    return ids;
  }
  async deleteSuggestion(id: string): Promise<any> {
    const res = await admin
      .firestore()
      .collection('ideas')
      .doc(id)
      .delete();
    return res.writeTime;
  }
}
