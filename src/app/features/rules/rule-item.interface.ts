import { Rule } from '@core/rule/rule.interface';
import { RuleDescription } from './rule-description.interface';

export interface RuleItem {
  rule: Rule;
  enabled: boolean;
  description: RuleDescription;
}
