import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDashboardComponent } from './containers/item-dashboard/item-dashboard.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

@NgModule({
  declarations: [ItemDashboardComponent, ItemDetailComponent],
  imports: [CommonModule],
  exports: [ItemDashboardComponent],
})
export class ItemDashboardModule {}
