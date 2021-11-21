import { Component } from '@angular/core';
import { WarehouseService } from 'src/app/services/warehouse.service';
import { Equipment } from '../models/equipment.interface';

@Component({
  selector: 'app-equipment-register',
  templateUrl: './equipment-register.component.html',
  styleUrls: ['./equipment-register.component.scss'],
})
export class EquipmentRegisterComponent {
  constructor(private warehouseService: WarehouseService) {}

  onSaveEquipment(equipment: Equipment) {
    this.warehouseService.saveEquipment(equipment);
  }
}
