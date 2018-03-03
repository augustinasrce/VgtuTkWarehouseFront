import {Component} from '@angular/core';

import {Equipment} from '../equipment-list-component/equipment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-save-form',
  templateUrl: './save-form.component.html',
  styleUrls: ['./save-form.component.css']
})
export class SaveFormComponent {

  constructor(private http: HttpClient) {
  }

  model = new Equipment();

  submitted = false;

  onSubmit() {
    const req = this.http.post('http://cors-anywhere.herokuapp.com/vgtu-warehouse-api.herokuapp.com/warehouse/equipment', {
      name: this.model.name,
      description: this.model.description,
      quantity: this.model.quantity,
      purchaseDate: this.model.purchaseDate
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        }
      );
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
