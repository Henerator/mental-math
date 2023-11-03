import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-success-count',
  templateUrl: './success-count.component.html',
  styleUrls: ['./success-count.component.scss'],
})
export class SuccessCountComponent {
  @Input() count = 0;
  @Input() minCount = 1;
}
