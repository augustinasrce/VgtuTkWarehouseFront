import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WarehouseService } from 'src/app/services/warehouse.service';
import { Equipment } from '../models/equipment.interface';

@Component({
  selector: 'app-equipment-dashboard',
  styleUrls: ['equipment-dashboard.component.scss'],
  templateUrl: './equipment-dashboard.component.html',
})
export class EquipmentDashboardComponent {
  equipment: Observable<Equipment[]>;
  columnsToDisplay = ['brand', 'model', 'description', 'quantity'];

  constructor(private warehouseService: WarehouseService) {
    this.equipment = this.warehouseService.getEquipment();
  }

  handleEdit(equipment: Equipment) {
    console.log('edit');
    console.log(equipment);
  }

  handleDelete(equipment: Equipment) {
    console.log('delete');
    console.log(equipment);
  }
}
