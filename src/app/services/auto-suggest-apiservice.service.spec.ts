import { TestBed } from '@angular/core/testing';

import { AutoSuggestAPIService } from './auto-suggest-apiservice.service';
import { MockService } from './mock.service';

describe('AutoSuggestAPIServiceService', () => {
  let service: AutoSuggestAPIService;
  let mockService = new MockService();

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoSuggestAPIService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have url string initialized', () => {
    var mockUrl = 'https://orxe.qa.cnxloyalty.com/api/autosuggest/v1.0/search';

    expect(service.url).toEqual(mockUrl);
  })

  it('should return getResults', () => {

    var header = new Headers();
    header.append("Content-Type", "application/json");
    header.append("cnx-sessionId", "38e1d4c3-5212-4a25-a036-dc62dbebbad0");
    header.append("cnx-tenantId", "3e1go4ilxq8");
    header.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbngtdGVuYW50SWQiOiIzZTFnbzRpbHhxOCIsImNueC1zZXNzaW9uaWQiOiIzOGUxZDRjMy01MjEyLTRhMjUtYTAzNi1kYzYyZGJlYmJhZDAiLCJjbngtY29ycmVsYXRpb25JZCI6IjYzN2U1ZjA0LWYxZGYtOGM4Ny02YmRiLTVkN2JhMTVhNzRkNiIsIkNTUkYtVG9rZW4iOiJmZGVlMTc0Ny04OWZlLTQ5MTctOGI5My0xODJkMzI4NjYxNWMiLCJjbGllbnQtaWQiOiIxMDMiLCJwcm9ncmFtLWlkIjoiMTM4OSIsInByb2dyYW0tZ3JvdXAtaWQiOiI1MDgiLCJkZXZpY2UtdHlwZSI6IkRlc2t0b3AiLCJwYXJ0aWNpcGFudC1jb2RlIjoiNzMwNzQ4OTgiLCJuYmYiOjE2NjI3MTc4NjcsImV4cCI6MTY2MjgwNDI2NywiaWF0IjoxNjYyNzE3ODY3LCJpc3MiOiJodHRwczovL29yeGUtYXBpLnFhLmNueGxveWFsdHkuY29tIn0.8xCCRe-z2NTQy9wqtICcx2CLfPLbyZbSHzvvAxvoP_s");

    var body = JSON.stringify({
      "sq": {
        "st": 'temp',
        "sf": [
          "airport",
          "city"
        ]
      },
      "sel": true,
      "rec": 20,
      "c": "cars"
    });

    service.getResults(header, body, true)
      .then(response => response.json())
      .then(result => {
        expect(result).toEqual(mockService.getAutoSuggestMock());
      });


  });
});
