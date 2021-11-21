import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipmentDashboardComponent } from './equipment/equipment-dashboard/equipment-dashboard.component';
import { EquipmentRegisterComponent } from './equipment/equipment-register/equipment-register.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Path } from './paths';
import { RentsDashboardComponent } from './rents/rents-dashboard/rents-dashboard.component';

const routes: Routes = [
  { path: Path.Home, component: HomeComponent },
  { path: Path.Equipment, component: EquipmentDashboardComponent },
  {
    path: Path.EquipmentRegister,
    component: EquipmentRegisterComponent,
  },
  {
    path: Path.Rents,
    component: RentsDashboardComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
