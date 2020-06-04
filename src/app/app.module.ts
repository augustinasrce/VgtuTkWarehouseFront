import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemDashboardModule } from './item-dashboard/item-dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ItemDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
