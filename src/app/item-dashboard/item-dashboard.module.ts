import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDashboardComponent } from './containers/item-dashboard/item-dashboard.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [ItemDashboardComponent, ItemDetailComponent],
  imports: [CommonModule, MatTableModule],
  exports: [ItemDashboardComponent],
})
export class ItemDashboardModule {}
