import { MathService } from '@core/math/math.service';
import { TaskOperation } from '@core/task/task-operation.enum';
import { Task } from '@core/task/task.interface';
import { BaseRule } from './base-rule';
import { RuleName } from '../rule-name.enum';

export class MinusAaaAaaRule extends BaseRule {
  name = RuleName.MinusAaaAaa;

  getTask(): Task {
    const a = MathService.getRandomInt(1, 1000);
    const b = MathService.getRandomInt(1, 1000);

    return {
      operation: TaskOperation.minus,
      a: a.toString(),
      b: b.toString(),
      answer: (a - b).toString(),
    };
  }
}
