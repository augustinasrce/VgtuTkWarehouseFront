import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, take } from 'rxjs';
import { Equipment } from '../equipment/models/equipment.interface';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService {
  private baseUrl: string = 'http://localhost:8080/warehouse';
  private equipmentUrl: string = `${this.baseUrl}/equipment`;

  constructor(private http: HttpClient) {}

  getEquipment(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(this.equipmentUrl);
  }

  saveEquipment(equipment: Equipment): void {
    this.http
      .post<Equipment>(this.equipmentUrl, equipment)
      .subscribe();
  }
}
