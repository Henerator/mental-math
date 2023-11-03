import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { QueryRoutingModule } from './query-routing.module';
import { QueryComponent } from './query.component';
import { SuccessCountComponent } from './success-count/success-count.component';
import { VirtualKeyboardComponent } from './virtual-keyboard/virtual-keyboard.component';

@NgModule({
  declarations: [
    QueryComponent,
    SuccessCountComponent,
    VirtualKeyboardComponent,
  ],
  imports: [CommonModule, MatIconModule, QueryRoutingModule],
})
export class QueryModule {}
