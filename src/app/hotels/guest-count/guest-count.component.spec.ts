import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestCountComponent } from './guest-count.component';

describe('GuestCountComponent', () => {
  let component: GuestCountComponent;
  let fixture: ComponentFixture<GuestCountComponent>;
  let spy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should should popup on function call', () => {

    const div = fixture.debugElement.nativeElement.querySelector('.traveller-count-modifier-popup');

    const tempDiv = fixture.debugElement.nativeElement.querySelector('.traveller-count-wrapper');

    spy = spyOn(component, 'showTravellerCountModifier').and.callThrough();
    
    tempDiv.click();
    expect(spy).toHaveBeenCalledWith(div);
  });

  it('should hide popup on function call', () => {
    
    const div = fixture.debugElement.nativeElement.querySelector('.traveller-count-modifier-popup');

    const tempDiv = fixture.debugElement.nativeElement.querySelector('.doneButtonHolder > button');

    spy = spyOn(component, 'closeTravellerCountModifier').and.callThrough();

    tempDiv.click();
    expect(spy).toHaveBeenCalledWith(div);

  });




});
