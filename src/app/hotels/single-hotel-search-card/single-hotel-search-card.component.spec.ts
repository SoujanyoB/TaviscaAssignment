import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHotelSearchCardComponent } from './single-hotel-search-card.component';

describe('SingleHotelSearchCardComponent', () => {
  let component: SingleHotelSearchCardComponent;
  let fixture: ComponentFixture<SingleHotelSearchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleHotelSearchCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleHotelSearchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
