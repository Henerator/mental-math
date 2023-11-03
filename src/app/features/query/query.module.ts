import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QueryRoutingModule } from './query-routing.module';
import { QueryComponent } from './query.component';
import { SuccessCountComponent } from './success-count/success-count.component';

@NgModule({
  declarations: [QueryComponent, SuccessCountComponent],
  imports: [CommonModule, QueryRoutingModule],
})
export class QueryModule {}
