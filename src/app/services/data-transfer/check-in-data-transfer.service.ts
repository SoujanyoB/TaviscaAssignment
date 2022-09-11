import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckInDataTransferService {

  checkInData: any;

  constructor() { }

  setCheckInData(checkInData: any) {
    this.checkInData = checkInData;
  }

  getCheckInData() {
    return this.checkInData;
  }
}
