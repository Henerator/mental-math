import { TaskOperation } from '@core/task/task-operation.enum';
import { createRule } from './create-rule.function';
import { RuleName } from './rule-name.enum';
import { RuleType } from './rule-type.enum';
import { Rule } from './rule.interface';

export const rules: Rule[] = [
  // plus
  createRule(
    RuleType.Binary,
    RuleName.PlusAaA,
    TaskOperation.plus,
    1,
    100,
    1,
    10
  ),
  createRule(
    RuleType.Binary,
    RuleName.PlusAaAa,
    TaskOperation.plus,
    1,
    100,
    1,
    100
  ),
  createRule(
    RuleType.Binary,
    RuleName.PlusAaaAa,
    TaskOperation.plus,
    1,
    1000,
    1,
    100
  ),
  createRule(
    RuleType.Binary,
    RuleName.PlusAaaAaa,
    TaskOperation.plus,
    1,
    1000,
    1,
    1000
  ),

  // minus
  createRule(
    RuleType.Binary,
    RuleName.MinusAaA,
    TaskOperation.minus,
    1,
    100,
    1,
    10
  ),
  createRule(
    RuleType.Binary,
    RuleName.MinusAaAa,
    TaskOperation.minus,
    1,
    100,
    1,
    100
  ),
  createRule(
    RuleType.Binary,
    RuleName.MinusAaaAa,
    TaskOperation.minus,
    1,
    1000,
    1,
    100
  ),
  createRule(
    RuleType.Binary,
    RuleName.MinusAaaAaa,
    TaskOperation.minus,
    1,
    1000,
    1,
    1000
  ),

  // multiplication
  createRule(
    RuleType.Binary,
    RuleName.MulAaA,
    TaskOperation.mul,
    2,
    100,
    2,
    10
  ),
  createRule(
    RuleType.Binary,
    RuleName.MulAaAa,
    TaskOperation.mul,
    2,
    100,
    2,
    100
  ),
  createRule(
    RuleType.Binary,
    RuleName.MulAaaA,
    TaskOperation.mul,
    2,
    1000,
    2,
    10
  ),

  // division
  createRule(
    RuleType.Binary,
    RuleName.DivAaA,
    TaskOperation.div,
    1,
    100,
    2,
    10
  ),
  createRule(
    RuleType.Binary,
    RuleName.DivAaaA,
    TaskOperation.div,
    1,
    1000,
    2,
    10
  ),

  // square
  createRule(RuleType.Power, RuleName.SquareAA, TaskOperation.pow, 2, 9, 2, 2),
  createRule(
    RuleType.Power,
    RuleName.SquareAaA,
    TaskOperation.pow,
    2,
    99,
    2,
    2
  ),

  // cube
  createRule(RuleType.Power, RuleName.CubeAA, TaskOperation.pow, 2, 9, 3, 3),
  createRule(RuleType.Power, RuleName.CubeAaA, TaskOperation.pow, 2, 99, 3, 3),

  // percent
  createRule(
    RuleType.Binary,
    RuleName.PercentAaAa,
    TaskOperation.percent,
    1,
    99,
    1,
    99
  ),
  createRule(
    RuleType.Binary,
    RuleName.PercentAaAaa,
    TaskOperation.percent,
    1,
    99,
    1,
    999
  ),
];
