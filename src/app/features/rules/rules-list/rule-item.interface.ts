import { Rule } from '@core/rule/rule.interface';

export interface RuleItem {
  rule: Rule;
  enabled: boolean;
  description: string;
}
