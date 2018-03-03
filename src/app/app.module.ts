import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {EquipmentComponent} from './equipment-component/equipment.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModuleModule} from './app-routing-module/app-routing-module.module';
import { SaveFormComponent } from './save-form/save-form.component';


@NgModule({
  declarations: [
    AppComponent,
    EquipmentComponent,
    SaveFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
