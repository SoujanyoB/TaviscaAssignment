import { Injectable } from '@angular/core';
import { MockService } from '../mock.service';

@Injectable({
  providedIn: 'root'
})
export class HotelsSearchService {

  url: string = 'https://hotel-loyalty.stage.cnxloyalty.com/hotel/v1.0/search'
  options: any = { status: 200 };
  constructor(private mockService: MockService) { }

  initialize(header: any, body: any, isMock: boolean) {



    const mockResult = new Promise<Response>(resolve => {
      resolve(new Response(JSON.stringify({
        "sessionId": "a4f8b61a-d183-42c4-807d-7dd5a9a08c1e-HLNXT$1371"
      }), this.options));
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

    var mockResult = new Promise<Response>(resolve => {
      resolve(new Response(JSON.stringify({
        "status": "Completed",
        "resultCount": 201
      }), this.options));
    });

    return isMock ? mockResult : fetch(`${this.url}/status`, {
      method: 'POST',
      headers: header,
      body: body,
      redirect: 'follow'
    });

  }


  getSearchResults(header: any, body: any, isMock: boolean) {

    var mockResult = new Promise<Response>(resolve => {
      resolve(new Response(JSON.stringify(this.mockService.getHotelSearchMock()), this.options));
    });

    return isMock ? mockResult : fetch(`${this.url}/results`, {
      method: 'POST',
      headers: header,
      body: body,
      redirect: 'follow'
    });
  }
}
