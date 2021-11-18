import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRegisterFormComponent } from './item-register-form.component';

describe('ItemRegisterFormComponent', () => {
  let component: ItemRegisterFormComponent;
  let fixture: ComponentFixture<ItemRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemRegisterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
