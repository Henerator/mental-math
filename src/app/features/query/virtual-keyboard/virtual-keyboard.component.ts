import { Component } from '@angular/core';
import { Key } from '@core/keyboard/key.enum';
import { KeyboardService } from '@core/keyboard/keyboard.service';
import { controlKeys } from './control-keys.const';
import { numberKeys } from './number-keys.const';

@Component({
  selector: 'app-virtual-keyboard',
  templateUrl: './virtual-keyboard.component.html',
  styleUrls: ['./virtual-keyboard.component.scss'],
})
export class VirtualKeyboardComponent {
  numberKeys = numberKeys;
  controlKeys = controlKeys;

  constructor(private keyboardService: KeyboardService) {}

  onKeyClick(key: Key): void {
    this.keyboardService.emitCustomEvent({
      key: key,
      code: key,
    });
  }
}
