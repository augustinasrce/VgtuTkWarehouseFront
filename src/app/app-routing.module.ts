import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipmentDashboardComponent } from './equipment/equipment-dashboard/equipment-dashboard.component';
import { EquipmentRegisterComponent } from './equipment/equipment-register/equipment-register.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'equipment', component: EquipmentDashboardComponent },
  {
    path: 'equipment-register',
    component: EquipmentRegisterComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
