import { Component, Input } from '@angular/core';
import { RuleItem } from '../../rule-item.interface';

@Component({
  selector: 'app-binary-rule',
  templateUrl: './binary-rule.component.html',
  styleUrls: ['./binary-rule.component.scss'],
})
export class BinaryRuleComponent {
  @Input() ruleItem!: RuleItem;
}
