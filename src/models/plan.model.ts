import { v4 as uuid } from 'uuid';
import IdeasModel from './idea.model';

export default class PlanModel {
  id: string = uuid();
  date: Date;
  meal: IdeasModel;
  name: string;
  createdBy: string;
  createdWhen: Date;
  modifiedBy: string;
  modifiedWhen: Date;
}
