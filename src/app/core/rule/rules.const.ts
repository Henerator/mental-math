import { DivAaARule } from './rules/div-aa-a.rule';
import { MinusAaAaRule } from './rules/minus-aa-aa.rule';
import { MulAAaRule } from './rules/mul-aa-a.rule';
import { MulAaAaRule } from './rules/mul-aa-aa.rule';
import { PlusAaAaRule } from './rules/plus-aa-aa.rule';
import { PlusAaaAaRule } from './rules/plus-aaa-aa.rule';
import { Rule } from './rule.type';

export const rules: Rule[] = [
  new PlusAaAaRule(),
  new PlusAaaAaRule(),
  new MinusAaAaRule(),
  new MulAAaRule(),
  new MulAaAaRule(),
  new DivAaARule(),
];
