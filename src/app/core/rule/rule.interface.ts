import { Task } from '@core/task/task.interface';
import { RuleName } from './rule-name.enum';

export interface Rule {
  name: RuleName;
  getTask(): Task;
}
