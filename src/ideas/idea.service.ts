import { Injectable } from '@nestjs/common';
import admin from 'firebase-admin';
import IdeaModel from '../models/idea.model';

@Injectable()
export class IdeaService {
  async getIdeas(): Promise<any> {
    const snapshot = await admin.firestore().collection('ideas').get();
    const data = snapshot.docs.map((doc) => {
      return doc.data();
    });
    return data;
  }
  async getIdeaById(id: string): Promise<IdeaModel> {
    const idea = new IdeaModel();
    const snapshot = await admin.firestore().collection('ideas').doc(id).get();
      idea.id = snapshot.data().id;
      idea.photo = snapshot.data().photo;
      idea.tags = snapshot.data().tags;
      idea.ingredients = snapshot.data().ingredients;
      idea.name = snapshot.data().name;
      idea.createdBy = snapshot.data().createdBy;
      idea.createdWhen = snapshot.data().createdWhen;
      idea.modifiedBy = snapshot.data().modifiedBy;
      idea.modifiedWhen = snapshot.data().modifiedWhen;
    return idea;
  }
  async updateIdea(idea: IdeaModel): Promise<any> {
    const res = await admin
      .firestore()
      .collection('ideas')
      .doc(idea.id)
      .set(idea);
    return res.writeTime;
  }
  async addIdea(idea: IdeaModel): Promise<string> {
    const res = await admin.firestore().collection('ideas').doc();
    idea.id = res.id;
    res.set(idea);
    console.log(idea)
    return idea.id;
  }
  async addIdeas(ideas: IdeaModel[]): Promise<string[]> {
    const ids = [];
    ideas.forEach(async (idea) => {
      const res = await admin.firestore().collection('ideas').doc();
      idea.id = res.id;
      res.set(idea);
      ids.push(idea.id);
    })
    return ids;
  }
  async deleteIdea(idea: IdeaModel): Promise<any> {
    const res = await admin
      .firestore()
      .collection('ideas')
      .doc(idea.id)
      .delete();
    return res.writeTime;
  }
}
