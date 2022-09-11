import { Injectable } from '@angular/core';
import { MockService } from '../mock.service';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesAPIService {

  url: string = 'https://activity-loyalty-service.qa.cnxloyalty.com/activity/v1.0/search';

  constructor(private mockService: MockService) {

  }

  initialize(header: any, body: any, isMock: boolean) {

    const mockResult = new Promise<Response>(resolve => {
      resolve(new Response(JSON.stringify({
        "sessionId": "fbb1459e-dd23-42ba-bfde-a9ea3125ffca-ACNXT$1371"
      })));
    });

    return isMock ? mockResult : fetch(`${this.url}/init`, {
      method: 'POST',
      headers: header,
      body: body,
      redirect: 'follow'
    });


  }


  getStatus(header: any, sessionID: string, isMock: boolean) {
    var body = JSON.stringify({
      "sessionId": sessionID
    });

    const mockResult = new Promise<Response>(resolve => {
      resolve(new Response(JSON.stringify({
        "status": "Completed",
        "resultCount": 53,
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


  getResults(header: any, body: any, isMock: true) {

    const mockResult = new Promise<Response>(resolve => {
      resolve(
        new Response(
          JSON.stringify(this.mockService.getActivitiesSearchMock())
        )
      );
    });

    return isMock ? mockResult : fetch(`${this.url}/result`, {
      method: 'POST',
      headers: header,
      body: body,
      redirect: 'follow'
    });

  }

}
