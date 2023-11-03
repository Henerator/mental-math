import { TaskOperation } from '@core/task/task-operation.enum';
import { Task } from '@core/task/task.interface';
import { RuleName } from './rule-name.enum';

export interface Rule {
  name: RuleName;
  operation: TaskOperation;
  getTask(): Task;
}
