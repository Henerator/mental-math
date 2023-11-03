import { TaskOperation } from '@core/task/task-operation.enum';
import { RuleItem } from './rule-item.interface';

export interface RuleItemGroup {
  operation: TaskOperation;
  rules: RuleItem[];
}
