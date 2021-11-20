import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { EquipmentDashboardComponent } from './equipment-dashboard/equipment-dashboard.component';
import { EquipmentRegisterFormComponent } from './equipment-register/equipment-register-form/equipment-register-form.component';
import { EquipmentRegisterComponent } from './equipment-register/equipment-register.component';

@NgModule({
  declarations: [
    EquipmentDashboardComponent,
    EquipmentRegisterComponent,
    EquipmentRegisterFormComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [EquipmentDashboardComponent, EquipmentRegisterComponent],
})
export class EquipmentModule {}
