import { Component, OnInit } from '@angular/core';
import { AutoSuggestAPIService } from 'src/app/services/auto-suggest-apiservice.service';
import { AutoSuggestDataTransferService } from 'src/app/services/data-transfer/auto-suggest-data-transfer.service';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  autoSuggestAPIService: AutoSuggestAPIService;
  autoSuggestSearchResults: any

  showAutosuggestResultsOnKeyReleased($event: any, autoSuggestContainer: any) {

    if ($event.target.value != "") {
      var header = new Headers();
      header.append("Content-Type", "application/json");
      header.append("cnx-sessionId", "38e1d4c3-5212-4a25-a036-dc62dbebbad0");
      header.append("cnx-tenantId", "3e1go4ilxq8");
      header.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbngtdGVuYW50SWQiOiIzZTFnbzRpbHhxOCIsImNueC1zZXNzaW9uaWQiOiIzOGUxZDRjMy01MjEyLTRhMjUtYTAzNi1kYzYyZGJlYmJhZDAiLCJjbngtY29ycmVsYXRpb25JZCI6IjYzN2U1ZjA0LWYxZGYtOGM4Ny02YmRiLTVkN2JhMTVhNzRkNiIsIkNTUkYtVG9rZW4iOiJmZGVlMTc0Ny04OWZlLTQ5MTctOGI5My0xODJkMzI4NjYxNWMiLCJjbGllbnQtaWQiOiIxMDMiLCJwcm9ncmFtLWlkIjoiMTM4OSIsInByb2dyYW0tZ3JvdXAtaWQiOiI1MDgiLCJkZXZpY2UtdHlwZSI6IkRlc2t0b3AiLCJwYXJ0aWNpcGFudC1jb2RlIjoiNzMwNzQ4OTgiLCJuYmYiOjE2NjI3MTc4NjcsImV4cCI6MTY2MjgwNDI2NywiaWF0IjoxNjYyNzE3ODY3LCJpc3MiOiJodHRwczovL29yeGUtYXBpLnFhLmNueGxveWFsdHkuY29tIn0.8xCCRe-z2NTQy9wqtICcx2CLfPLbyZbSHzvvAxvoP_s");

      var body = JSON.stringify({
        "sq": {
          "st": $event.target.value,
          "sf": [
            "airport",
            "city"
          ]
        },
        "sel": true,
        "rec": 20,
        "c": "cars"
      });

      this.autoSuggestAPIService.getResults(header, body, true)
        .then((response: any) => {
          if (!response.ok) {
            throw new Error(response.statusText)
          }
          return response.json();
        })
        .then((result: any) => {
          this.autoSuggestSearchResults = result.s;
          autoSuggestContainer.style.visibility = 'visible';
        })
        .catch(error => {
          console.log('error', error);
        });

    } else {
      autoSuggestContainer.style.visibility = 'hidden';
    }

  }

  handleListItemClick($event: any, searchBarInput: any) {

    searchBarInput.value = $event.target.innerText;
    $event.target.parentNode.parentNode.style.visibility = 'hidden';

    const index = [...$event.target.parentNode.children].indexOf($event.target);

    this.dataTransferService.setAutoSuggestData(this.autoSuggestSearchResults[index]);


  }


  constructor(private dataTransferService: AutoSuggestDataTransferService, private mockService: MockService) {
    this.autoSuggestAPIService = new AutoSuggestAPIService(mockService);
  }

  ngOnInit(): void {
  }

}
