import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ActivitiesAPIService } from 'src/app/services/activities/activities-api.service';
import { AutoSuggestDataTransferService } from 'src/app/services/data-transfer/auto-suggest-data-transfer.service';
import { CheckInDataTransferService } from 'src/app/services/data-transfer/check-in-data-transfer.service';
import { CheckOutDataTransferService } from 'src/app/services/data-transfer/check-out-data-transfer.service';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-activities-search',
  templateUrl: './activities-search.component.html',
  styleUrls: ['./activities-search.component.css']
})
export class ActivitiesSearchComponent implements OnInit {

  activitiesAPIService: ActivitiesAPIService;
  sessionID: string = "";
  autoSuggestData: any;
  header: Headers;
  timestamp: any;

  constructor(private router: Router, 
    private autoSuggestTransferService: AutoSuggestDataTransferService,
    private checkInDataTransferService: CheckInDataTransferService,
    private checkOutDataTransferService: CheckOutDataTransferService,
    private mockService: MockService) {
    this.activitiesAPIService = new ActivitiesAPIService(mockService);
    this.autoSuggestData = autoSuggestTransferService.getAutoSuggestData();

    this.timestamp = moment().format("YYYYMMDDhhmm");

    this.header = new Headers();
    this.header.append("Content-Type", "application/json");
    this.header.append("cnx-tenantId", "2o9o3ae99ts");
    this.header.append("Accept-Language", "en-US");
    this.header.append("cnx-userip", "127.128.128.128");
    this.header.append("cnx-environment-token", "T3");
    this.header.append("cnx-correlationId", `a80e8621-510e-4686-${this.timestamp}`);
    this.header.append("cnx-mock", "false");
  }

  ngOnInit(): void {
  }


  searchActivities() {


    var body = JSON.stringify({
      "searchQuery": {
        "dateRange": {
          "from": this.checkInDataTransferService.getCheckInData(),
          "to": this.checkOutDataTransferService.getCheckOutData()
        },
        "bounds": {
          "circle": {
            "center": {
              "lat": this.autoSuggestData.lat,
              "long": this.autoSuggestData.lng
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

    this.activitiesAPIService.initialize(this.header, body, true)
      .then(res => res.json())
      .then(result => {
        this.sessionID = result.sessionId;

        this.statusCheck(this.header);

      })
      .catch(err => console.error(err));

  }

  statusCheck(header: any) {
    this.activitiesAPIService.getStatus(header, this.sessionID, true)
      .then(res => res.json())
      .then(result => {

        if (result.status != 'Completed') {
          this.statusCheck(header)
        } else {

          var body = JSON.stringify({
            "paging": {
              "pageNo": 1,
              "pageSize": 30,
              "orderBy": "price"
            },
            "sessionId": this.sessionID,
            "currency": "USD"
          });

          this.activitiesAPIService.getResults(header, body, true)
            .then(response => response.json())
            .then(result => {
              console.log(result.activities);

              this.router.navigateByUrl('/results/activities', {
                state: {
                  searchResults: result.activities
                }
              });
            })
            .catch(error => console.log('error', error));
        }
      })
      .catch(err => console.error(err));
  }

}
