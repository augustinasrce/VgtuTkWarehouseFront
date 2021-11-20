import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService {
  private baseUrl: string = 'http://localhost:8080/warehouse';
  private equipmentUrl: string = `${this.baseUrl}/equipment`;

  constructor(private http: HttpClient) {}

  getEquipment(): Observable<any> {
    return this.http.get<any>(this.equipmentUrl);
  }
}
