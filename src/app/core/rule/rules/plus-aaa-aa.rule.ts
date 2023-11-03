import { MathService } from '@core/math/math.service';
import { TaskOperation } from '@core/task/task-operation.enum';
import { Task } from '@core/task/task.interface';
import { BaseRule } from './base-rule';
import { RuleName } from '../rule-name.enum';

export class PlusAaaAaRule extends BaseRule {
  name = RuleName.PlusAaaAa;

  getTask(): Task {
    const a = MathService.getRandomInt(1, 1000);
    const b = MathService.getRandomInt(1, 100);

    return {
      operation: TaskOperation.plus,
      a: a.toString(),
      b: b.toString(),
      answer: (a + b).toString(),
    };
  }
}
