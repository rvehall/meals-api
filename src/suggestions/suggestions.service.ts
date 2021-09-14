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

    let filteredArray = [];

    if(query != {}) {
      if(query?.searchText != '') {
        let nameResults = data.filter((mealPrep: any) => mealPrep.name.toLowerCase().includes(query?.searchText.toLowerCase()));
        let tagResults =  data.filter((mealPrep: any) => mealPrep.tags.some((t: string) => t.includes(query?.searchText.toLowerCase())));
        let ingredientResults = data.filter((mealPrep: any) => mealPrep.ingredients.some((i: string) => i.includes(query?.searchText.toLowerCase())));
        
        filteredArray = _.unionBy(nameResults, ingredientResults, tagResults, 'name');
      }
    }
    
    let results = query.searchText != '' ? filteredArray : data;

    return results;
  }
  async getSuggestionById(id: string): Promise<SuggestionModel> {
    const suggestion = new SuggestionModel();
    const snapshot = await admin.firestore().collection('suggestions').doc(id).get();
      suggestion.id = snapshot.data().id;
      suggestion.photo = snapshot.data().photo;
      suggestion.tags = snapshot.data().tags;
      suggestion.ingredients = snapshot.data().ingredients;
      suggestion.name = snapshot.data().name;
      suggestion.createdBy = snapshot.data().createdBy;
      suggestion.createdWhen = snapshot.data().createdWhen;
      suggestion.modifiedBy = snapshot.data().modifiedBy;
      suggestion.modifiedWhen = snapshot.data().modifiedWhen;
    return suggestion;
  }
  async updateSuggestion(suggestion: SuggestionModel): Promise<any> {
    const res = await admin
      .firestore()
      .collection('suggestions')
      .doc(suggestion.id)
      .set(suggestion);
    return res.writeTime;
  }
  async addSuggestion(suggestion: SuggestionModel): Promise<string> {
    const res = await admin.firestore().collection('suggestions').doc();
    suggestion.id = res.id;
    res.set(suggestion);
    console.log(suggestion)
    return suggestion.id;
  }
  async addSuggestions(suggestions: SuggestionModel[]): Promise<string[]> {
    const ids = [];
    suggestions.forEach(async (suggestion) => {
      const res = await admin.firestore().collection('suggestions').doc();
      suggestion.id = res.id;
      res.set(suggestion);
      ids.push(suggestion.id);
    })
    return ids;
  }
  async deleteSuggestion(suggestion: SuggestionModel): Promise<any> {
    const res = await admin
      .firestore()
      .collection('suggestions')
      .doc(suggestion.id)
      .delete();
    return res.writeTime;
  }
}
