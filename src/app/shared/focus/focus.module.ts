import { NgModule } from '@angular/core';
import { ClearButtonFocusDirective } from './clear-button-focus/clear-button-focus.directive';

@NgModule({
  declarations: [ClearButtonFocusDirective],
  exports: [ClearButtonFocusDirective],
})
export class FocusModule {}
