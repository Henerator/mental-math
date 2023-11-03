import { MathService } from '@core/math/math.service';
import { TaskOperation } from '@core/task/task-operation.enum';
import { Task } from '@core/task/task.interface';
import { BaseRule } from './base-rule';
import { RuleName } from '../rule-name.enum';

export class MulAaaARule extends BaseRule {
  name = RuleName.MulAaaA;

  getTask(): Task {
    const a = MathService.getRandomInt(2, 1000);
    const b = MathService.getRandomInt(2, 10);

    return {
      operation: TaskOperation.mul,
      a: a.toString(),
      b: b.toString(),
      answer: (a * b).toString(),
    };
  }
}
