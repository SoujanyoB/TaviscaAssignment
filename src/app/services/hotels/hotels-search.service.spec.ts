import { TestBed } from '@angular/core/testing';
import { MockService } from '../mock.service';

import { HotelsSearchService } from './hotels-search.service';

describe('HotelsSearchService', () => {
  let service: HotelsSearchService;
  const mockService = new MockService();

  const header = new Headers();
  header.append("Content-Type", "application/json");
  header.append("loyalty-userIp", "127.0.0.1");
  header.append("loyalty-clientId", "123");
  header.append("loyalty-correlationId", "cid1123");
  header.append("cnx-userIp", "127.0.0.1");
  header.append("cnx-clientId", "123");
  header.append("cnx-correlationId", "de27dc60-377f-4401-9bf6-f974f2c145ca");
  header.append("cnx-tenantId", "2pq3iaipudc");
  header.append("cnx-environment-token", "SG");
  header.append("Accept-Language", "en-US");

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelsSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have url initialized', () => {
    const mockUrl = 'https://hotel-loyalty.stage.cnxloyalty.com/hotel/v1.0/search';

    expect(service.url).toEqual(mockUrl);
  });

  it('should call init API on initialize', async () => {
    var body = JSON.stringify({
      "currency": "USD",
      "searchQuery": {
        "roomOccupancy": {
          "occupants": [
            {
              "type": "Adult",
              "age": 25
            }
          ]
        },
        "stayPeriod": {
          "start": "2022/09/22",
          "end": "2022/09/24"
        },
        "bounds": {
          "circle": {
            "center": {
              "lat": "334.34",
              "long": "343.45"
            },
            "radiusKm": 50
          }
        }
      },
      "customerInfo": {
        "id": "123_UT",
        "transitCode": "e213c3e9-8376-4505-b413-adf0de74a6fd",
        "availablePointBalance": 1000000.0,
        "eligibilityInfo": {
          "programCurrency": "Points",
          "purchaseAllowed": true,
          "redemptionAllowed": true,
          "displayProgramCurrencyAsDecimal": false,
          "useVariableMilesFormula": false,
          "shortfallAllowed": true
        }
      },
      "programId": "1371"
    });

    service.initialize(header, body, true).then(response => response.json()).then(result => {
      expect(result).toEqual({
        'sessionId': 'a4f8b61a-d183-42c4-807d-7dd5a9a08c1e-HLNXT$1371',
      });
    });

  });


  it('should call status API on searchStatus', async () => {
   
    var sessionId =  'a4f8b61a-d183-42c4-807d-7dd5a9a08c1e-HLNXT$1371';

    service.getStatus(header, sessionId, true).then(response => response.json()).then(result => {
      expect(result).toEqual({
        "status": 'Completed',
        "resultCount": 201
      });
    });
  });

  it('should call results API on getResults', async () => {
    var body = JSON.stringify({
      "paging": {
        "pageNo": 1,
        "pageSize": 30,
        "orderBy": "price"
      },
      "sessionId": 'asfdsfdsfsfds',
      "currency": "USD"
    });

    service.getSearchResults(header, body, true).then(response => response.json()).then(result => {
      expect(result).toEqual(mockService.getHotelSearchMock());
    });

    

  });



});
