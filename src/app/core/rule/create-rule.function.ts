import { MathService } from '@core/math/math.service';
import { TaskOperation } from '@core/task/task-operation.enum';
import { RuleName } from './rule-name.enum';
import { RuleType } from './rule-type.enum';
import { Rule } from './rule.interface';

type AnswerGetter = (a: number, b: number) => string;

const operationAnswerMap = new Map<TaskOperation, AnswerGetter>([
  [TaskOperation.plus, (a, b) => (a + b).toString()],
  [TaskOperation.minus, (a, b) => (a - b).toString()],
  [TaskOperation.mul, (a, b) => (a * b).toString()],
  [TaskOperation.div, (a, b) => MathService.toFixedNoRounding(a / b)],
  [
    TaskOperation.percent,
    (percent, a) => MathService.toFixedNoRounding((percent * a) / 100, 2),
  ],
  [TaskOperation.pow, (a, b) => Math.pow(a, b).toString()],
]);

interface OperandsGetter {
  getA: (a: number) => string;
  getB: (b: number) => string;
}

const defaultOperandsGetter: OperandsGetter = {
  getA: (a) => a.toString(),
  getB: (b) => b.toString(),
};

const operandsGetterMap = new Map<TaskOperation, OperandsGetter>([
  [
    TaskOperation.percent,
    {
      getA: (a) => `${a}%`,
      getB: (b) => b.toString(),
    },
  ],
]);

type OperationGetter = (operation: TaskOperation) => TaskOperation;

const defaultOperationGetter: OperationGetter = (operation) => operation;

const operationGetterMap = new Map<TaskOperation, OperationGetter>([
  [TaskOperation.percent, () => TaskOperation.of],
]);

export function createRule(
  type: RuleType,
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

  const operandsGetter =
    operandsGetterMap.get(operation) || defaultOperandsGetter;
  const operationGetter =
    operationGetterMap.get(operation) || defaultOperationGetter;

  return {
    type,
    name,
    operation,
    getTask: () => {
      const a = MathService.getRandomInt(minA, maxA);
      const b = MathService.getRandomInt(minB, maxB);

      return {
        type,
        operation: operationGetter(operation),
        a: operandsGetter.getA(a),
        b: operandsGetter.getB(b),
        answer: answerGetter(a, b),
      };
    },
  };
}
