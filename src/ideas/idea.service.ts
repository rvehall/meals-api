import { Injectable } from '@nestjs/common';
import admin from 'firebase-admin';
// import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';
import IdeaModel from 'src/models/idea.model';

const ideas: IdeaModel[] = [];
const idea: IdeaModel = new IdeaModel();
@Injectable()
export class IdeaService {
  async getIdeas(): Promise<any> {
    const doc = await admin.firestore().collection('ideas').get();
    if (doc.empty) {
      console.log('No such document!');
    } else {
      console.log('Document data:', doc);
    }

    return doc;
  }
  getIdeaById(id: string): IdeaModel {
    return idea;
  }
  updateIdea(idea: IdeaModel): boolean {
    return true;
  }
  addIdea(idea: IdeaModel): boolean {
    // db.collection('ideas').add(idea);
    admin.firestore().collection('ideas').add(idea);
    return true;
  }
  deleteIdea(idea: IdeaModel): boolean {
    return true;
  }
}
