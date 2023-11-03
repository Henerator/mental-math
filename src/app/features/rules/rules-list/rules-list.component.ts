import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RuleType } from '@core/rule/rule-type.enum';
import { RuleService } from '@core/rule/rule.service';
import { TaskOperation } from '@core/task/task-operation.enum';
import { ruleDescriptionMap } from '../rule-description-map';
import { RuleItemGroup } from '../rule-group.interface';
import { RuleItem } from '../rule-item.interface';

@Component({
  selector: 'app-rules-list',
  templateUrl: './rules-list.component.html',
  styleUrls: ['./rules-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesListComponent implements OnInit {
  ruleType = RuleType;

  ruleGroups: RuleItemGroup[] = [];
  ruleItems: RuleItem[] = [];

  constructor(private ruleService: RuleService) {}

  ngOnInit(): void {
    this.updateRules();
  }

  public trackRuleItemGroup(_index: number, group: RuleItemGroup): string {
    return group.operation;
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
    this.ruleGroups = this.getRuleGroups();
  }

  private toggleRule(item: RuleItem): void {
    if (item.enabled) {
      this.ruleService.disableRule(item.rule.name);
      return;
    }

    this.ruleService.enableRule(item.rule.name);
  }

  private getRuleGroups(): RuleItemGroup[] {
    const map = this.getRuleItems().reduce((map, ruleItem) => {
      const operation = ruleItem.rule.operation;
      if (!map.has(operation)) {
        map.set(operation, []);
      }

      const group = map.get(operation)!;
      group.push(ruleItem);

      return map;
    }, new Map<TaskOperation, RuleItem[]>());

    return [...map].map(([operation, rules]) => ({
      operation,
      rules,
    }));
  }

  private getRuleItems(): RuleItem[] {
    const enabledRuleNames = new Set(
      this.ruleService.getEnabledRules().map((rule) => rule.name)
    );

    return this.ruleService.getAllRules().map((rule) => ({
      rule: rule,
      enabled: enabledRuleNames.has(rule.name),
      description: ruleDescriptionMap.get(rule.name)!,
    }));
  }
}
