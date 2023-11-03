import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RuleService } from '@core/rule/rule.service';
import { ruleDescriptionMap } from '../rule-description-map';
import { RuleItem } from './rule-item.interface';

@Component({
  selector: 'app-rules-list',
  templateUrl: './rules-list.component.html',
  styleUrls: ['./rules-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesListComponent implements OnInit {
  ruleItems: RuleItem[] = [];

  constructor(private ruleService: RuleService) {}

  ngOnInit(): void {
    this.updateRules();
  }

  public trackRuleItem(_index: number, item: RuleItem): string {
    return item.rule.name;
  }

  public onRuleClick(item: RuleItem): void {
    this.toggleRule(item);
    this.updateRules();
  }

  private updateRules(): void {
    this.ruleItems = this.getRuleItems();
  }

  private toggleRule(item: RuleItem): void {
    if (item.enabled) {
      this.ruleService.disableRule(item.rule.name);
      return;
    }

    this.ruleService.enableRule(item.rule.name);
  }

  private getRuleItems(): RuleItem[] {
    const enabledRuleNames = new Set(
      this.ruleService.getEnabledRules().map((rule) => rule.name)
    );

    return this.ruleService.getAllRules().map((rule) => ({
      rule: rule,
      enabled: enabledRuleNames.has(rule.name),
      description: ruleDescriptionMap.get(rule.name) || '',
    }));
  }
}
