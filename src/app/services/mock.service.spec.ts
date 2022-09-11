import { TestBed } from '@angular/core/testing';

import { MockService } from './mock.service';

describe('MockService', () => {
  let service: MockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return non null autosuggest mock data', () => {
    expect(service.getAutoSuggestMock()).not.toBeNull();
  });

  it('should return non null activities mock data', () => {
    expect(service.getActivitiesSearchMock()).not.toBeNull();
  });

  it('should return non null hotels mock data', () => {
    expect(service.getHotelSearchMock()).not.toBeNull();
  });

  it('should return non null hotels mock data', () => {
    expect(service.getCarMock()).not.toBeNull();
  });

});
