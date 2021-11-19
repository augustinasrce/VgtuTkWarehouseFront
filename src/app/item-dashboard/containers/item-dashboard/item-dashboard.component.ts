import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipmentService } from 'src/app/services/equipment.service';
import { Item } from '../../models/item.interface';

@Component({
  selector: 'app-item-dashboard',
  styleUrls: ['item-dashboard.component.scss'],
  templateUrl: './item-dashboard.component.html',
})
export class ItemDashboardComponent {
  equipment: Observable<Item[]>;
  columnsToDisplay = ['brand', 'model', 'description', 'quantity'];

  constructor(private equipmentService: EquipmentService) {
    this.equipment = this.equipmentService.getEquipment();
  }

  handleEdit(item: Item) {
    console.log('edit');
    console.log(item);
  }

  handleDelete(item: Item) {
    console.log('delete');
    console.log(item);
  }
}
