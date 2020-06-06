import { Component, Input } from "@angular/core";
import { Item } from '../../models/item.interface';

@Component({
  selector: "item-detail",
  styleUrls: ["item-detail.component.scss"],
  template: `
    <div>
      {{detail | json}}
    </div>
  `,
})
export class ItemDetailComponent {

  @Input()
  detail: Item;
}
