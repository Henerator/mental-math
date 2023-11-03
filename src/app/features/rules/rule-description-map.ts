import { RuleName } from '@core/rule/rule-name.enum';

export const ruleDescriptionMap = new Map<RuleName, string>([
  [RuleName.PlusAaAa, 'XX + XX'],
  [RuleName.PlusAaaAa, 'XXX + XX'],
  [RuleName.MinusAaAa, 'XX - XX'],
  [RuleName.MulAaA, 'XX x X'],
  [RuleName.MulAaAa, 'XX x XX'],
  [RuleName.DivAaA, 'XX / X'],
]);
