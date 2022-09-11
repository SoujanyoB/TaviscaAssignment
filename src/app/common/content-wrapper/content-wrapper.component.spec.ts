import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentWrapperComponent } from './content-wrapper.component';

describe('ContentWrapperComponent', () => {
  let component: ContentWrapperComponent;
  let fixture: ComponentFixture<ContentWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have activeButton intialized to FLIGHTS', () => {
    expect(component.activeButton).toEqual('FLIGHTS');
  });

  it('should have clickedFormNavigationButton not initialized', () => {
    expect(component.clickedFormNavigationButton).toEqual('');
  });

  it('should call function onClickButton', () => {

    const button = fixture.debugElement.nativeElement.querySelector('button[data-section="CARS"]');
    
    button.click();

    expect(component.activeButton).toEqual('CARS');

  });

});
