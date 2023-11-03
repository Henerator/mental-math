import { Key } from '@core/keyboard/key.enum';
import { MatIcon } from '@shared/material/icons/mat-icon.enum';
import { VirtualKeyboardKey } from './virtual-keyboard-key.interface';

export const controlKeys: VirtualKeyboardKey[] = [
  {
    key: Key.Delete,
    text: MatIcon.Backspace,
    isIcon: true,
  },
  {
    key: Key.Empty,
    text: Key.Empty,
  },
  {
    key: Key.Empty,
    text: Key.Empty,
  },
  {
    key: Key.Skip,
    text: 'Next',
  },
];
