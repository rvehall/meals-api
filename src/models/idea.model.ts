import { v4 as uuid } from 'uuid';

export default class IdeaModel {
  id: string = uuid();
  name: string;
  photo: string;
  ingredients: string[];
  tags: string[];
  createdBy: string = 'system';
  createdWhen: Date= new Date();
  modifiedBy: string = 'system';
  modifiedWhen: Date = new Date();
}
