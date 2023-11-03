import { RuleName } from '@core/rule/rule-name.enum';
import { RuleDescription } from './rule-description.interface';

export const ruleDescriptionMap = new Map<RuleName, RuleDescription>([
  [
    RuleName.PlusAaA,
    {
      a: '99',
      b: '9',
      operation: '+',
    },
  ],
  [
    RuleName.PlusAaAa,
    {
      a: '99',
      b: '99',
      operation: '+',
    },
  ],
  [
    RuleName.PlusAaaAa,
    {
      a: '999',
      b: '99',
      operation: '+',
    },
  ],
  [
    RuleName.PlusAaaAaa,
    {
      a: '999',
      b: '999',
      operation: '+',
    },
  ],
  [
    RuleName.MinusAaA,
    {
      a: '99',
      b: '9',
      operation: '-',
    },
  ],
  [
    RuleName.MinusAaAa,
    {
      a: '99',
      b: '99',
      operation: '-',
    },
  ],
  [
    RuleName.MinusAaaAa,
    {
      a: '999',
      b: '99',
      operation: '-',
    },
  ],
  [
    RuleName.MinusAaaAaa,
    {
      a: '999',
      b: '999',
      operation: '-',
    },
  ],
  [
    RuleName.MulAaA,
    {
      a: '99',
      b: '9',
      operation: 'x',
    },
  ],
  [
    RuleName.MulAaAa,
    {
      a: '99',
      b: '99',
      operation: 'x',
    },
  ],
  [
    RuleName.MulAaaA,
    {
      a: '999',
      b: '9',
      operation: 'x',
    },
  ],
  [
    RuleName.DivAaA,
    {
      a: '99',
      b: '9',
      operation: '÷',
    },
  ],
  [
    RuleName.DivAaaA,
    {
      a: '999',
      b: '9',
      operation: '÷',
    },
  ],
]);
