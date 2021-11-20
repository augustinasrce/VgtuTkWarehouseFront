import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Equipment } from '../../models/equipment.interface';

@Component({
  selector: 'app-equipment-register-form',
  templateUrl: './equipment-register-form.component.html',
  styleUrls: ['./equipment-register-form.component.scss'],
})
export class EquipmentRegisterFormComponent {
  @Output() saveEquipmentEmmiter: EventEmitter<Equipment> =
    new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  registerEquipmentForm = this.formBuilder.group({
    brand: [''],
    model: [''],
    description: [''],
    quantity: [undefined],
  });

  onSubmit() {
    if (this.registerEquipmentForm.valid) {
      const equipment: Equipment = {
        brand: this.registerEquipmentForm.controls['brand'].value,
        model: this.registerEquipmentForm.controls['model'].value,
        description:
          this.registerEquipmentForm.controls['description'].value,
        quantity:
          this.registerEquipmentForm.controls['quantity'].value,
      };
      this.saveEquipmentEmmiter.emit(equipment);
    }
  }
}
