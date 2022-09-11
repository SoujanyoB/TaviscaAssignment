import { TestBed } from '@angular/core/testing';

import { CheckOutDataTransferService } from './check-out-data-transfer.service';

describe('CheckOutDataTransferService', () => {
  let service: CheckOutDataTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckOutDataTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have checkOutData not initialized', () => {
    expect(service.checkOutData).toBeUndefined();
  });

  it('should set checkOutData on setCheckOutData function Call', () => {

    var mockData = 'asdsaddsaf';

    service.setCheckOutData(mockData);

    expect(service.checkOutData).toEqual(mockData);

  });

  it('should get checkOutData on getCheckOutData function call', () => {
    var mockData = 'asdsaddsaf';

    service.setCheckOutData(mockData);

    expect(service.getCheckOutData()).toEqual(mockData);

  });
});
