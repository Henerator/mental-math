import { MathService } from '@core/math/math.service';
import { TaskOperation } from '@core/task/task-operation.enum';
import { RuleName } from './rule-name.enum';
import { Rule } from './rule.interface';

type AnswerGetter = (a: number, b: number) => string;

const operationAnswerMap = new Map<TaskOperation, AnswerGetter>([
  [TaskOperation.plus, (a, b) => (a + b).toString()],
  [TaskOperation.minus, (a, b) => (a - b).toString()],
  [TaskOperation.mul, (a, b) => (a * b).toString()],
  [TaskOperation.div, (a, b) => MathService.toFixedNoRounding(a / b)],
]);

export function createRule(
  name: RuleName,
  operation: TaskOperation,
  minA: number,
  maxA: number,
  minB: number,
  maxB: number
): Rule {
  const answerGetter = operationAnswerMap.get(operation);

  if (!answerGetter) {
    throw new Error(`No answer getter for operator ${operation}`);
  }

  return {
    name,
    getTask: () => {
      const a = MathService.getRandomInt(minA, maxA);
      const b = MathService.getRandomInt(minB, maxB);

      return {
        operation,
        a: a.toString(),
        b: b.toString(),
        answer: answerGetter(a, b),
      };
    },
  };
}
