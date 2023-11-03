import { Rule } from './rule.type';
import { DivAaARule } from './rules/div-aa-a.rule';
import { DivAaaARule } from './rules/div-aaa-a.rule';
import { MinusAaARule } from './rules/minus-aa-a.rule';
import { MinusAaAaRule } from './rules/minus-aa-aa.rule';
import { MinusAaaAaRule } from './rules/minus-aaa-aa.rule';
import { MinusAaaAaaRule } from './rules/minus-aaa-aaa.rule';
import { MulAAaRule } from './rules/mul-aa-a.rule';
import { MulAaAaRule } from './rules/mul-aa-aa.rule';
import { MulAaaARule } from './rules/mul-aaa-a.rule';
import { PlusAaARule } from './rules/plus-aa-a.rule';
import { PlusAaAaRule } from './rules/plus-aa-aa.rule';
import { PlusAaaAaRule } from './rules/plus-aaa-aa.rule';
import { PlusAaaAaaRule } from './rules/plus-aaa-aaa.rule';

export const rules: Rule[] = [
  new PlusAaARule(),
  new PlusAaAaRule(),
  new PlusAaaAaRule(),
  new PlusAaaAaaRule(),

  new MinusAaARule(),
  new MinusAaAaRule(),
  new MinusAaaAaRule(),
  new MinusAaaAaaRule(),

  new MulAAaRule(),
  new MulAaAaRule(),
  new MulAaaARule(),

  new DivAaARule(),
  new DivAaaARule(),
];
