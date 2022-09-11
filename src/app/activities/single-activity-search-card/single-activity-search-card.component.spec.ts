import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleActivitySearchCardComponent } from './single-activity-search-card.component';

describe('SingleActivitySearchCardComponent', () => {
  let component: SingleActivitySearchCardComponent;
  let fixture: ComponentFixture<SingleActivitySearchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleActivitySearchCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleActivitySearchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
