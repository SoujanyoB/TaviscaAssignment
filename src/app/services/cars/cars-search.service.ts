import { Injectable } from '@angular/core';
import { MockService } from '../mock.service';

@Injectable({
  providedIn: 'root'
})
export class CarsSearchService {

  transitUrl: string = 'https://transit-service.qa.cnxloyalty.com/api/v1.0/transitService/generateTransitCode';

  url: string = 'https://car-loyalty.qa.cnxloyalty.com//car/v1.0/search'

  constructor(private mockService: MockService) { }

  initialize(header: any, body: any, isMock: boolean) {

    const mockResult = new Promise<Response>(resolve => {
      resolve(new Response(JSON.stringify({
        "sessionId": "05b90e63-25a7-4a33-b956-84a3e6f95387-CLNXT|1389"
      })));
    });

    return isMock ? mockResult : fetch(`${this.url}/init`, {
      method: 'POST',
      headers: header,
      body: body,
      redirect: 'follow'
    });
  }

  getStatus(header: any, sessionId: string, isMock: boolean) {
    var body = JSON.stringify({
      "sessionId": sessionId
    });

    const mockResult = new Promise<Response>(resolve => {
      resolve(new Response(JSON.stringify({
        "status": "Completed",
        "resultsCount": 46,
        "errors": []
      })));
    });

    return isMock ? mockResult : fetch(`${this.url}/status`, {
      method: 'POST',
      headers: header,
      body: body,
      redirect: 'follow'
    });

  }


  getSearchResults(header: any, body: any, isMock: boolean) {

    const mockResult = new Promise<Response>(resolve => {
      resolve(
        new Response(
          JSON.stringify(this.mockService.getCarMock())
        )
      );
    });

    return isMock ? mockResult : fetch(`${this.url}/results`, {
      method: 'POST',
      headers: header,
      body: body,
      redirect: 'follow'
    });
  }
}
