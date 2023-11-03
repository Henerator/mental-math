import { Injectable } from '@angular/core';
import { StorageService } from '@core/storage/storage.service';
import { Observable, Subject } from 'rxjs';
import { defaultRuleNames } from './default-rule-names.const';
import { RuleName } from './rule-name.enum';
import { Rule } from './rule.type';
import { rules } from './rules.const';
import { storageKey } from './storage-key.const';

@Injectable({
  providedIn: 'root',
})
export class RuleService {
  public rulesChange$: Observable<void>;

  private rules: Rule[] = [];
  private rulesChangeSubject = new Subject<void>();

  constructor(private storageService: StorageService) {
    this.rulesChange$ = this.rulesChangeSubject.asObservable();
    this.rulesChange$.subscribe(() => this.saveRules());
    this.restoreSavedRules();
  }

  getEnabledRules(): Rule[] {
    return this.rules;
  }

  getAllRules(): Rule[] {
    return rules;
  }

  enableRule(name: RuleName): void {
    const ruleToEnable = rules.find((rule) => rule.name === name);
    if (ruleToEnable) {
      this.rules.push(ruleToEnable);
      this.emitRulesChange();
    }
  }

  disableRule(name: RuleName): void {
    this.rules = this.rules.filter((rule) => rule.name !== name);
    this.emitRulesChange();
  }

  private restoreSavedRules(): void {
    const savedRuleNames = this.storageService.getArray<string>(
      storageKey.rules
    );
    const ruleNames = savedRuleNames || defaultRuleNames;
    this.setRulesByNames(ruleNames);
  }

  private saveRules(): void {
    const ruleNames = this.rules.map((rule) => rule.name);
    this.storageService.setArray(storageKey.rules, ruleNames);
  }

  private setRulesByNames(names: string[]): void {
    const namesSet = new Set(names);
    this.rules = rules.filter((rule) => namesSet.has(rule.name));
  }

  private emitRulesChange(): void {
    this.rulesChangeSubject.next();
  }
}
