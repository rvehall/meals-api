import { Injectable } from '@nestjs/common';
import IdeaModel from 'src/models/idea.model';

const ideas: IdeaModel[] = [];
const idea: IdeaModel = new IdeaModel();
@Injectable()
export class IdeaService {
  getIdeas(): IdeaModel[] {
    return ideas;
  }
  getIdeaById(id: string): IdeaModel {
    return idea;
  }
  updateIdea(idea: IdeaModel): boolean {
    return true;
  }
  addIdea(idea: IdeaModel): boolean {
    return true;
  }
  deleteIdea(idea: IdeaModel): boolean {
    return true;
  }
}
