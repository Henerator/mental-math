import { RuleName } from '@core/rule/rule-name.enum';

export const ruleDescriptionMap = new Map<RuleName, string>([
  [RuleName.PlusAaA, 'XX + X'],
  [RuleName.PlusAaAa, 'XX + XX'],
  [RuleName.PlusAaaAa, 'XXX + XX'],
  [RuleName.PlusAaaAaa, 'XXX + XXX'],
  [RuleName.MinusAaA, 'XX - X'],
  [RuleName.MinusAaAa, 'XX - XX'],
  [RuleName.MinusAaaAa, 'XXX - XX'],
  [RuleName.MinusAaaAaa, 'XXX - XXX'],
  [RuleName.MulAaA, 'XX x X'],
  [RuleName.MulAaAa, 'XX x XX'],
  [RuleName.MulAaaA, 'XXX x X'],
  [RuleName.DivAaA, 'XX / X'],
  [RuleName.DivAaaA, 'XXX / X'],
]);
