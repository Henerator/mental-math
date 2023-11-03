import { Key } from '@core/keyboard/key.enum';

export interface VirtualKeyboardKey {
  key: Key;
  text: string;
  isIcon?: boolean;
}
