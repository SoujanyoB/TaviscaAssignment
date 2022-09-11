import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AutoSuggestDataTransferService } from 'src/app/services/data-transfer/auto-suggest-data-transfer.service';
import { CheckInDataTransferService } from 'src/app/services/data-transfer/check-in-data-transfer.service';
import { CheckOutDataTransferService } from 'src/app/services/data-transfer/check-out-data-transfer.service';
import { HotelsSearchService } from 'src/app/services/hotels/hotels-search.service';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-hotels-search',
  templateUrl: './hotels-search.component.html',
  styleUrls: ['./hotels-search.component.css']
})
export class HotelsSearchComponent implements OnInit {

  hotelsSearchService: HotelsSearchService;

  constructor(
    private router: Router,
    private autoSuggestTransferService: AutoSuggestDataTransferService,
    private checkInDataTransferService: CheckInDataTransferService,
    private checkOutDataTransferService: CheckOutDataTransferService,
    private mockService: MockService
  ) {
    this.hotelsSearchService = new HotelsSearchService(mockService);
  }

  ngOnInit(): void {
  }


  searchHotels() {

    var header = new Headers();
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




    var lat = this.autoSuggestTransferService.getAutoSuggestData().lat;
    var lng = this.autoSuggestTransferService.getAutoSuggestData().lng;

    console.log(lat, lng);

    var startDate = this.checkInDataTransferService.getCheckInData();
    var endDate = this.checkOutDataTransferService.getCheckOutData();

    console.log(startDate, endDate);

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
          "start": startDate,
          "end": endDate
        },
        "bounds": {
          "circle": {
            "center": {
              "lat": lat,
              "long": lng
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


    this.hotelsSearchService.initialize(header, body, true)
      .then(response => response.json())
      .then(result => {
        console.log(result.sessionId);

        this.checkStatus(header, result.sessionId);

      })
      .catch(error => console.log('error', error))



  }


  checkStatus(header: any, sessionId: string) {

    this.hotelsSearchService.getStatus(header, sessionId, true)
      .then(response => response.json())
      .then(result => {
        if (result.status != 'Completed') {
          this.checkStatus(header, sessionId);
        } else {
          console.log(result.status);

          var body = JSON.stringify({
            "paging": {
              "pageNo": 1,
              "pageSize": 30,
              "orderBy": "price"
            },
            "sessionId": sessionId,
            "currency": "USD"
          });

          this.hotelsSearchService.getSearchResults(header, body, true)
            .then(response => response.json())
            .then(result => {
              console.log(result.hotels);

              this.router.navigateByUrl('/results/hotel', {
                state: {
                  searchResults: result.hotels
                }
              });

            })
          .catch(error => console.log('error', error));
          

        }
      })
      .catch(error => console.log('error', error));

  }

}
