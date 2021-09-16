import { v4 as uuid } from 'uuid';

export default class MealPrepModel {
  id: string = uuid();
  date: Date;
  meal: string;
  name: string;
  type: string;
  isDone: boolean = false;
  createdBy: string = 'system';
  createdWhen: Date= new Date();
  modifiedBy: string = 'system';
  modifiedWhen: Date = new Date();
}
