import { Component, OnInit } from "@angular/core";
import { Item } from "../../models/item.interface";

@Component({
  selector: "item-dashboard",
  styleUrls: ["item-dashboard.component.scss"],
  template: `
    <div>
      item-dashboard
      <item-detail
        *ngFor="let item of items"
        [detail]="item"
        (edit)="handleEdit($event)"
        (delete)="handleDelete($event)"
        >
      </item-detail>
    </div>
  `,
})
export class ItemDashboardComponent implements OnInit {
  items: Item[];

  ngOnInit(): void {
    this.items = [
      {
        id: 1,
        brand: "Petzl",
        model: "Atache",
        description: "Crab",
        quantity: 5,
      },
      {
        id: 2,
        brand: "Petzl",
        model: "OK",
        description: "Crab",
        quantity: 4,
      },
      {
        id: 3,
        brand: "Petzl",
        model: "Jumar",
        description: "Ascender",
        quantity: 2,
      },
      {
        id: 4,
        brand: "Petzl",
        model: "Reverso",
        description: "Descender",
        quantity: 1,
      },
      {
        id: 5,
        brand: "BD",
        model: "Spot",
        description: "Headlight",
        quantity: 2,
      },
    ];
  }

  handleEdit(item: Item) {
    console.log("edit");
    console.log(item);
  }

  handleDelete(item: Item) {
    console.log("delete");
    console.log(item);
  }
}
