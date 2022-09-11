import { TestBed } from '@angular/core/testing';
import { MockService } from '../mock.service';

import { CarsSearchService } from './cars-search.service';

describe('CarsSearchService', () => {
  let service: CarsSearchService;
  const mockService = new MockService();

  const header = new Headers();
  header.append("Content-Type", "application/json");
  header.append("Accept-Encoding", "gzip, deflate");
  header.append("Accept-Language", "es-ES");
  header.append("cnx-correlationId", "03497fcf-24e6-83da-be98-f411f1e5bef8");
  header.append("cnx-userIp", "127.0.0.1");
  header.append("cnx-tenantId", "2pu5zh4e9kw");
  header.append("cnx-environment-token", "T2");

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have url initialized', () => {
    const mockUrl = 'https://car-loyalty.qa.cnxloyalty.com//car/v1.0/search';

    expect(service.url).toEqual(mockUrl);
  });

  it('should call init API on initialize', async () => {

    var body = JSON.stringify({
      "currency": "USD",
      "programId": "1389",
      "searchQuery": {
        "criteria": {
          "pickUp": {
            "airportCode": "JFK",
            "date": "2022-12-12",
            "time": "10:30"
          },
          "dropOff": {
            "sameAsPickup": true,
            "airportCode": "JFK",
            "date": "2022-12-17",
            "time": "17:30"
          },
          "driverInfo": {
            "age": 25,
            "nationality": "US"
          }
        }
      },
      "customerInfo": {
        "id": "23_123456",
        "availablePointBalance": 2500000,
        "transitCode": "50661252-8279-36e2-025e-3e796370ec0a",
        "eligibilityInfo": {
          "programCurrency": "Points",
          "purchaseAllowed": true,
          "redemptionAllowed": true,
          "displayProgramCurrencyAsDecimal": false,
          "useVariableMilesFormula": false,
          "shortfallAllowed": true
        }
      }
    });

    service.initialize(header, body, true).then(response => response.json()).then(result => {
      expect(result).toEqual({
        "sessionId": "05b90e63-25a7-4a33-b956-84a3e6f95387-CLNXT|1389"
      });
    });
  });

  it('should call status API on searchStatus', async () => {

    var sessionId = '05b90e63-25a7-4a33-b956-84a3e6f95387-CLNXT|1389';

    service.getStatus(header, sessionId, true).then(response => response.json()).then(result => {
      expect(result).toEqual({
        "status": "Completed",
        "resultsCount": 46,
        "errors": []
      });
    });

  });


  it('should call results API on getResults', async () => {
    var body = JSON.stringify({
      "sessionId": "{{sessionId}}",
      "currency": "USD",
      "paging": {
        "pageNo": 1,
        "pageSize": 15,
        "orderBy": "rentalCompany asc,price asc"
      },
      "contentPrefs": [
        "All"
      ],
      "filters": {
        "airConditionedOnly": false,
        "vendor": {
          "allow": [],
          "disallow": []
        },
        "vehicleType": {
          "allow": [],
          "disallow": []
        },
        "vehicleCategory": {
          "allow": [],
          "disallow": []
        },
        "rentalIds": [],
        "pickUpLocationType": ["Neighborhood", "Airport"],
        "dropOffLocationType": ["Airport", "Neighborhood"]
      },
      "returnType": "Immediate"
    });

    service.getSearchResults(header, body, true).then(response => response.json()).then(result => {
      expect(result).toEqual(mockService.getCarMock());
    });

  });


});
