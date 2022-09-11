import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutDatePickerComponent } from './check-out-date-picker.component';

describe('CheckOutDatePickerComponent', () => {
  let component: CheckOutDatePickerComponent;
  let fixture: ComponentFixture<CheckOutDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckOutDatePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckOutDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
