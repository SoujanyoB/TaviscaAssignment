import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoSuggestDataTransferService {

  autoSuggestData: any;

  constructor() {
   }

  setAutoSuggestData(data: any) {
    this.autoSuggestData = data;
  }

  getAutoSuggestData() {
    return this.autoSuggestData;
  }
}
