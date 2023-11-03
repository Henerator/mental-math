import { Rule } from '@core/rule/rule.type';

export interface RuleItem {
  rule: Rule;
  enabled: boolean;
  description: string;
}
