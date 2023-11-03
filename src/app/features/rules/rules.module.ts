import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RulesListComponent } from './rules-list/rules-list.component';

@NgModule({
  declarations: [RulesListComponent],
  imports: [CommonModule],
  exports: [RulesListComponent],
})
export class RulesModule {}
