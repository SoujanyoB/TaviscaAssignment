import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCarSearchCardComponent } from './single-car-search-card.component';

describe('SingleCarSearchCardComponent', () => {
  let component: SingleCarSearchCardComponent;
  let fixture: ComponentFixture<SingleCarSearchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCarSearchCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCarSearchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
