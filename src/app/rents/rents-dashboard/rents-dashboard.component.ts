import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Rent } from 'src/app/equipment/models/rent.interface';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-rents-dashboard',
  templateUrl: './rents-dashboard.component.html',
  styleUrls: ['./rents-dashboard.component.scss'],
})
export class RentsDashboardComponent implements OnInit {
  rents: Observable<Rent[]>;

  constructor(private warehouseService: WarehouseService) {
    this.rents = this.warehouseService.getRents();
  }

  ngOnInit(): void {}
}
