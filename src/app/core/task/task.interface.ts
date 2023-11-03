import { RuleType } from '@core/rule/rule-type.enum';
import { TaskOperation } from './task-operation.enum';

export interface Task {
  type: RuleType; // TODO: refactor
  operation: TaskOperation;
  a: string;
  b: string;
  answer: string;
}
