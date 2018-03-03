import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-equipment-component',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  daiktai: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Daiktas>('http://vgtu-warehouse-api.herokuapp.com/warehouse/equipment')
      .subscribe(data => {
        this.daiktai = data;
      });
  }
}
