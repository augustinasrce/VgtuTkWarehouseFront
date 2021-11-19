import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Item } from '../../models/item.interface';

@Component({
  selector: 'app-item-dashboard',
  styleUrls: ['item-dashboard.component.scss'],
  templateUrl: './item-dashboard.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'),
      ),
    ]),
  ],
})
export class ItemDashboardComponent {
  items: Item[];
  columnsToDisplay = ['brand', 'model', 'description', 'quantity'];

  constructor() {
    this.items = [
      {
        id: 1,
        brand: 'Petzl',
        model: 'Atache',
        description: 'Crab',
        quantity: 5,
      },
      {
        id: 2,
        brand: 'Petzl',
        model: 'OK',
        description: 'Crab',
        quantity: 4,
      },
      {
        id: 3,
        brand: 'Petzl',
        model: 'Jumar',
        description: 'Ascender',
        quantity: 2,
      },
      {
        id: 4,
        brand: 'Petzl',
        model: 'Reverso',
        description: 'Descender',
        quantity: 1,
      },
      {
        id: 5,
        brand: 'BD',
        model: 'Spot',
        description: 'Headlight',
        quantity: 2,
      },
    ];
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
