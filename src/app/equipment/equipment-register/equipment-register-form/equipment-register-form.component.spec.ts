import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentRegisterFormComponent } from './equipment-register-form.component';

describe('EquipmentRegisterFormComponent', () => {
  let component: EquipmentRegisterFormComponent;
  let fixture: ComponentFixture<EquipmentRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentRegisterFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
