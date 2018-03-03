import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-equipment-component',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  items: any;
  newDate: object;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Item>('http://cors-anywhere.herokuapp.com/vgtu-warehouse-api.herokuapp.com/warehouse/equipment')
      .subscribe(data => {
        this.items = data;
      });
  }
  onClickEdit(item) {
    console.log(item.id);
  }
}
