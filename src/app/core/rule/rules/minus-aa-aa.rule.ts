import { MathService } from '@core/math/math.service';
import { TaskOperation } from '@core/task/task-operation.enum';
import { Task } from '@core/task/task.interface';
import { BaseRule } from './base-rule';
import { RuleName } from '../rule-name.enum';

export class MinusAaAaRule extends BaseRule {
  name = RuleName.MinusAaAa;

  getTask(): Task {
    const a = MathService.getRandomInt(1, 100);
    const b = MathService.getRandomInt(1, 100);

    return {
      operation: TaskOperation.minus,
      a: a.toString(),
      b: b.toString(),
      answer: (a - b).toString(),
    };
  }
}
