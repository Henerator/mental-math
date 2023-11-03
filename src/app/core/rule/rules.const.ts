import { TaskOperation } from '@core/task/task-operation.enum';
import { createRule } from './create-rule.function';
import { RuleName } from './rule-name.enum';
import { Rule } from './rule.interface';

export const rules: Rule[] = [
  // plus
  createRule(RuleName.PlusAaA, TaskOperation.plus, 1, 100, 1, 10),
  createRule(RuleName.PlusAaAa, TaskOperation.plus, 1, 100, 1, 100),
  createRule(RuleName.PlusAaaAa, TaskOperation.plus, 1, 1000, 1, 100),
  createRule(RuleName.PlusAaaAaa, TaskOperation.plus, 1, 1000, 1, 1000),

  // minus
  createRule(RuleName.MinusAaA, TaskOperation.minus, 1, 100, 1, 10),
  createRule(RuleName.MinusAaAa, TaskOperation.minus, 1, 100, 1, 100),
  createRule(RuleName.MinusAaaAa, TaskOperation.minus, 1, 1000, 1, 100),
  createRule(RuleName.MinusAaaAaa, TaskOperation.minus, 1, 1000, 1, 1000),

  // multiplication
  createRule(RuleName.MulAaA, TaskOperation.mul, 2, 100, 2, 10),
  createRule(RuleName.MulAaAa, TaskOperation.mul, 2, 100, 2, 100),
  createRule(RuleName.MulAaaA, TaskOperation.mul, 2, 1000, 2, 10),

  // division
  createRule(RuleName.DivAaA, TaskOperation.div, 1, 100, 2, 10),
  createRule(RuleName.DivAaaA, TaskOperation.div, 1, 1000, 2, 10),

  // percent
  createRule(RuleName.PercentAaAa, TaskOperation.percent, 1, 99, 1, 99),
  createRule(RuleName.PercentAaAaa, TaskOperation.percent, 1, 99, 1, 999),
];
