import { Directive, HostListener, Inject } from '@angular/core';
import { windowToken } from '@core/window/window.token';

@Directive({
  selector: 'button[clearButtonFocus]',
})
export class ClearButtonFocusDirective {
  constructor(
    @Inject(windowToken)
    private readonly window: Window
  ) {}

  @HostListener('click')
  onClick() {
    (this.window.document.activeElement as HTMLElement)?.blur();
  }
}
