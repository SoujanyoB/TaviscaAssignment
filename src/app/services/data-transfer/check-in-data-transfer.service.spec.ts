import { TestBed } from '@angular/core/testing';

import { CheckInDataTransferService } from './check-in-data-transfer.service';

describe('CheckInDataTransferService', () => {
  let service: CheckInDataTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckInDataTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have checkInData not initialized', () => {
    expect(service.checkInData).toBeUndefined();
  });

  it('should set checkInData on setCheckInData function Call', () => {

    var mockData = 'asdsaddsaf';

    service.setCheckInData(mockData);

    expect(service.checkInData).toEqual(mockData);

  });

  it('should get checkInData on getCheckInData function call', () => {
    var mockData = 'asdsaddsaf';

    service.setCheckInData(mockData);

    expect(service.getCheckInData()).toEqual(mockData);

  });
});
