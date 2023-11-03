import { Component, Input } from '@angular/core';
import { RuleItem } from '../../rule-item.interface';

@Component({
  selector: 'app-power-rule',
  templateUrl: './power-rule.component.html',
  styleUrls: ['./power-rule.component.scss'],
})
export class PowerRuleComponent {
  @Input() ruleItem!: RuleItem;
}
