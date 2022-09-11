import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsSearchService } from 'src/app/services/cars/cars-search.service';
import { AutoSuggestDataTransferService } from 'src/app/services/data-transfer/auto-suggest-data-transfer.service';
import { CheckInDataTransferService } from 'src/app/services/data-transfer/check-in-data-transfer.service';
import { CheckOutDataTransferService } from 'src/app/services/data-transfer/check-out-data-transfer.service';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-cars-search',
  templateUrl: './cars-search.component.html',
  styleUrls: ['./cars-search.component.css']
})
export class CarsSearchComponent implements OnInit {

  header: Headers;

  constructor(
    private router: Router,
    private carsSearchService: CarsSearchService,
    private autoSuggestDataTransferService: AutoSuggestDataTransferService,
    private checkInDataTransferService: CheckInDataTransferService,
    private checkOutDataTransferService: CheckOutDataTransferService,
    private mockService: MockService
  ) {
    this.header = new Headers();
    this.header.append("Content-Type", "application/json");
    this.header.append("Accept-Encoding", "gzip, deflate");
    this.header.append("Accept-Language", "es-ES");
    this.header.append("cnx-correlationId", "03497fcf-24e6-83da-be98-f411f1e5bef8");
    this.header.append("cnx-userIp", "127.0.0.1");
    this.header.append("cnx-tenantId", "2pu5zh4e9kw");
    this.header.append("cnx-environment-token", "T2");
  }

  ngOnInit(): void {
  }


  searchCars() {

    var body = JSON.stringify({
      "currency": "USD",
      "programId": "1389",
      "searchQuery": {
        "criteria": {
          "pickUp": {
            "airportCode": "JFK",
            "date": this.checkInDataTransferService.getCheckInData(),
            "time": "10:30"
          },
          "dropOff": {
            "sameAsPickup": true,
            "airportCode": "JFK",
            "date": this.checkOutDataTransferService.getCheckOutData(),
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

    this.carsSearchService.initialize(this.header, body, true)
      .then(response => response.json())
      .then(result => {
        console.log(result.sessionId);

        this.checkStatus(this.header, result.sessionId);

      });



  }


  checkStatus(header: any, sessionId: string) {
    this.carsSearchService.getStatus(header, sessionId, true)
      .then(response => response.json())
      .then(result => {
        if (result.status != 'Completed') {
          this.checkStatus(header, sessionId);
        } else {

          var body = JSON.stringify({
            "sessionId": sessionId,
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
              "pickUpLocationType": [
                "Neighborhood",
                "Airport"
              ],
              "dropOffLocationType": [
                "Airport",
                "Neighborhood"
              ]
            },
            "returnType": "Immediate"
          });

          this.carsSearchService.getSearchResults(header, body, true)
            .then(response => response.json())
            .then(result => {

              this.router.navigateByUrl('/results/cars', {
                state: result
              });
            });
        }
      })
      .catch(err => console.error(err));
  }

}
