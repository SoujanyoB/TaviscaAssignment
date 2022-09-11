import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropOffTimeComponent } from './drop-off-time.component';

describe('DropOffTimeComponent', () => {
  let component: DropOffTimeComponent;
  let fixture: ComponentFixture<DropOffTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropOffTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropOffTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
