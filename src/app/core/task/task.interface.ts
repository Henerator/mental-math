import { TaskOperation } from './task-operation.enum';

export interface Task {
  operation: TaskOperation;
  a: string;
  b: string;
  answer: string;
  userAnswer?: string;
}
