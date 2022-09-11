import { TestBed } from '@angular/core/testing';
import * as moment from 'moment';
import { MockService } from '../mock.service';

import { ActivitiesAPIService } from './activities-api.service';

describe('ActivitiesAPIService', () => {
  let service: ActivitiesAPIService;
  const mockService = new MockService();

  var timestamp = moment().format("YYYYMMDDhhmm");

  const header = new Headers();
  header.append("Content-Type", "application/json");
  header.append("cnx-tenantId", "2o9o3ae99ts");
  header.append("Accept-Language", "en-US");
  header.append("cnx-userip", "127.128.128.128");
  header.append("cnx-environment-token", "T3");
  header.append("cnx-correlationId", `a80e8621-510e-4686-${timestamp}`);
  header.append("cnx-mock", "false");

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivitiesAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have url initialized', () => {
    const mockUrl = 'https://activity-loyalty-service.qa.cnxloyalty.com/activity/v1.0/search';

    expect(service.url).toEqual(mockUrl);
  });

  it('should call init API on initialize', async () => {

    var body = JSON.stringify({
      "searchQuery": {
        "dateRange": {
          "from": "this.checkInDataTransferService.getCheckInData()",
          "to": "this.checkOutDataTransferService.getCheckOutData()"
        },
        "bounds": {
          "circle": {
            "center": {
              "lat": "this.autoSuggestData.lat",
              "long": "this.autoSuggestData.lng"
            },
            "radiusKm": 48
          }
        },
        "paxNationality": "IN",
        "filters": {
          "price": {},
          "categories": [
            "16",
            "12",
            "4",
            "9"
          ]
        }
      },
      "customerInfo": {
        "id": "AutoUser",
        "availablePointBalance": 50000,
        "transitCode": "416ABCAF-3D5F-44E5-86E7-5B7BC822CC6B",
        "eligibilityInfo": {
          "programCurrency": "Points",
          "purchaseAllowed": true,
          "redemptionAllowed": true,
          "displayProgramCurrencyAsDecimal": false,
          "useVariableMilesFormula": false,
          "shortfallAllowed": true
        }
      },
      "programId": "1371",
      "currency": "USD"
    });

    service.initialize(header, body, true).then(response => response.json()).then(result => {
      expect(result).toEqual({
        "sessionId": "fbb1459e-dd23-42ba-bfde-a9ea3125ffca-ACNXT$1371"
      });
    });
  });

  it('should call status API on searchStatus', async () => {

    var sessionId = '05b90e63-25a7-4a33-b956-84a3e6f95387-CLNXT|1389';

    service.getStatus(header, sessionId, true).then(response => response.json()).then(result => {
      expect(result).toEqual({
        "status": "Completed",
        "resultCount": 53,
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

    service.getResults(header, body, true).then(response => response.json()).then(result => {
      expect(result).toEqual(mockService.getActivitiesSearchMock());
    });

  });


});
