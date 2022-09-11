import { TestBed } from '@angular/core/testing';

import { AutoSuggestDataTransferService } from './auto-suggest-data-transfer.service';

describe('DataTransferService', () => {
  let service: AutoSuggestDataTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoSuggestDataTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have autoSuggestData not initialized', () => {
    expect(service.autoSuggestData).toBeUndefined();
  });

  it('should set autoSuggestData on setAutoSuggestData function Call', () => {

    var mockData = 'asdsaddsaf';

    service.setAutoSuggestData(mockData);

    expect(service.autoSuggestData).toEqual(mockData);

  });

  it('should get autoSuggestData on getAutoSuggestData function call', () => {
    var mockData = 'asdsaddsaf';

    service.setAutoSuggestData(mockData);

    expect(service.getAutoSuggestData()).toEqual(mockData);

  });


});
