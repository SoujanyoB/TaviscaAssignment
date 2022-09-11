import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckOutDataTransferService {


  checkOutData: any;

  constructor() { }

  
  setCheckOutData(checkInData: any) {
    this.checkOutData = checkInData;
  }

  getCheckOutData() {
    return this.checkOutData;
  }
}
