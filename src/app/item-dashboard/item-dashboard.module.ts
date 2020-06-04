import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDashboardComponent } from './containers/item-dashboard/item-dashboard.component';

@NgModule({
    declarations:[
      ItemDashboardComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
      ItemDashboardComponent
    ]
})
export class ItemDashboardModule{}
