import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WindowModule } from '@core/window/window.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavModule } from './shared/sidenav/sidenav.module';
import { QueryModule } from './features/query/query.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    WindowModule,
    SidenavModule,
    QueryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
