import { Task } from '@core/task/task.interface';

export abstract class BaseRule {
  abstract name: string;
  abstract getTask(): Task;
}
