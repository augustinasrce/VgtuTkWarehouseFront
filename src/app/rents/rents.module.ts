import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentsDashboardComponent } from './rents-dashboard/rents-dashboard.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [RentsDashboardComponent],
  imports: [CommonModule, MatTableModule],
})
export class RentsModule {}
