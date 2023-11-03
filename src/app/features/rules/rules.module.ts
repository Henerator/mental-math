import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BinaryRuleComponent } from './rules-list/binary-rule/binary-rule.component';
import { PowerRuleComponent } from './rules-list/power-rule/power-rule.component';
import { RulesListComponent } from './rules-list/rules-list.component';

@NgModule({
  declarations: [RulesListComponent, BinaryRuleComponent, PowerRuleComponent],
  imports: [CommonModule],
  exports: [RulesListComponent],
})
export class RulesModule {}
