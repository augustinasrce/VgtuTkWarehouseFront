import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Item } from '../../models/item.interface';

@Component({
  selector: 'app-item-detail',
  styleUrls: ['item-detail.component.scss'],
  templateUrl: './item-detail.component.html',
})
export class ItemDetailComponent {
  @Input() detail!: Item;

  @Output()
  edit: EventEmitter<Item> = new EventEmitter();

  @Output()
  delete: EventEmitter<Item> = new EventEmitter();

  onEdit() {
    this.edit.emit(this.detail);
  }

  onDelete() {
    this.delete.emit(this.detail);
  }
}
