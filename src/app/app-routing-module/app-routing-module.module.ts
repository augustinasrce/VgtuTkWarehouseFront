import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EquipmentComponent} from '../equipment-list-component/equipment.component';
import {SaveFormComponent} from '../save-equipment-form/save-form.component';

const routes: Routes = [
  { path: 'equipment', component: EquipmentComponent },
  { path: 'save', component: SaveFormComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModuleModule { }
