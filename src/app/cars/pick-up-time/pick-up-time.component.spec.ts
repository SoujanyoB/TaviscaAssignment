import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickUpTimeComponent } from './pick-up-time.component';

describe('PickUpTimeComponent', () => {
  let component: PickUpTimeComponent;
  let fixture: ComponentFixture<PickUpTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickUpTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickUpTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
