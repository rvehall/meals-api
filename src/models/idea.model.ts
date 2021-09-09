import { v4 as uuid } from 'uuid';

export default class IdeaModel {
  id: string = uuid();
  name: string;
  image: string;
  ingredients: string[];
  createdBy: string;
  createdWhen: Date;
  modifiedBy: string;
  modifiedWhen: Date;
}
