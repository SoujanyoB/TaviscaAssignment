import { Injectable } from '@angular/core';
import { MockService } from './mock.service';

@Injectable({
  providedIn: 'root'
})
export class AutoSuggestAPIService {

  url: string = 'https://orxe.qa.cnxloyalty.com/api/autosuggest/v1.0/search';


  constructor(private mockService: MockService) { }

  getResults(header: any, body: any, isMock: boolean) {


    var mockResult = new Promise<Response>(resolve => {
      resolve(new Response(JSON.stringify(this.mockService.getAutoSuggestMock())));
    });

    return isMock ? mockResult : fetch(this.url, {
      method: 'POST',
      headers: header,
      body: body,
      redirect: 'follow'
    });

    // return x;
  }
}
