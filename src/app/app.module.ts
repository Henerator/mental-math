import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WindowModule } from '@core/window/window.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavModule } from './features/sidenav/sidenav.module';
import { QueryModule } from './features/query/query.module';
import { RulesModule } from './features/rules/rules.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    WindowModule,
    SidenavModule,
    QueryModule,
    RulesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
