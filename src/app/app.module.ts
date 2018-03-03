import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {EquipmentComponent} from './equipment-list-component/equipment.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModuleModule} from './app-routing-module/app-routing-module.module';
import { SaveFormComponent } from './save-equipment-form/save-form.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EquipmentComponent,
    SaveFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModuleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
