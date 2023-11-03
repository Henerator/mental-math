import { Task } from '@core/task/task.interface';
import { QueryState } from './query-state.enum';

export interface Query {
  task: Task;
  state?: QueryState;
  animationState?: QueryState;
}
