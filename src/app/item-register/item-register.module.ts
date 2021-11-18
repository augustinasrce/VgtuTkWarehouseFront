import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ItemRegisterComponent } from './item-register.component';
import { ItemRegisterFormComponent } from './item-register-form/item-register-form.component';

@NgModule({
  declarations: [ItemRegisterComponent, ItemRegisterFormComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [ItemRegisterComponent],
})
export class ItemRegisterModule {}
