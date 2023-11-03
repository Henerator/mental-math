import { TaskOperation } from '@core/task/task-operation.enum';
import { Task } from '@core/task/task.interface';
import { RuleName } from './rule-name.enum';
import { RuleType } from './rule-type.enum';

export interface Rule {
  type: RuleType; // TODO: replace with RuleType
  name: RuleName;
  operation: TaskOperation; // TODO: replace with RuleOperation
  getTask(): Task;
}
