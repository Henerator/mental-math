import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [SidenavComponent],
  imports: [CommonModule, MatSidenavModule, MatIconModule, MatButtonModule],
  exports: [SidenavComponent],
})
export class SidenavModule {}
