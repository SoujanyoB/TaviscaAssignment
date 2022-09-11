import { ComponentFixture, fakeAsync, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AutoSuggestDataTransferService } from 'src/app/services/data-transfer/auto-suggest-data-transfer.service';
import { CheckInDataTransferService } from 'src/app/services/data-transfer/check-in-data-transfer.service';
import { CheckOutDataTransferService } from 'src/app/services/data-transfer/check-out-data-transfer.service';
import { MockService } from 'src/app/services/mock.service';

import { ActivitiesSearchComponent } from './activities-search.component';

describe('ActivitiesSearchComponent', () => {
  let component: ActivitiesSearchComponent;
  let fixture: ComponentFixture<ActivitiesSearchComponent>;
  let mockService = new MockService();

  const mockRouter = {
    getCurrentNavigation: jasmine.createSpy('getCurrentNavigation')
  }

  // const mockAutoSuggestDataTransferService = jasmine.createSpyObj(AutoSuggestDataTransferService, ['setAutoSuggestData', 'getAutoSuggestData']);
  // mockAutoSuggestDataTransferService.setAutoSuggestData.and.returnValue(mockService.getAutoSuggestMock());


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ActivitiesSearchComponent],
      providers: [AutoSuggestDataTransferService, CheckInDataTransferService, CheckOutDataTransferService, {
        provide: Router,
        useValue: mockRouter
      }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ActivitiesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have activitiesAPIService defined', () => {
    expect(component.activitiesAPIService).toBeDefined();
  });

  it('should have sessionID as empty string', () => {
    expect(component.sessionID).toEqual('');
  });

  it('should have header defined', () => {
    expect(component.header).toBeDefined();
  });

});
