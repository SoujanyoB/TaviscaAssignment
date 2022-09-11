import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCardComponent } from './download-card.component';

describe('DownloadCardComponent', () => {
  let component: DownloadCardComponent;
  let fixture: ComponentFixture<DownloadCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have inputPhoneNumberLabel to be empty', () => {
    expect(component.inputPhoneNumberLabel).toEqual('');
  });

  it('should define inputPhoneNumberLabel on function call', () => {
    
    var input = fixture.debugElement.nativeElement.querySelector('#input-phone-number');

    input.click();

    expect(component.inputPhoneNumberLabel).toEqual('Phone Number');

  });

});
