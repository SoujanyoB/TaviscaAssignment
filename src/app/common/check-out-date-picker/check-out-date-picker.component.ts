import { Component, OnInit } from '@angular/core';
import { CheckOutDataTransferService } from 'src/app/services/data-transfer/check-out-data-transfer.service';

@Component({
  selector: 'app-check-out-date-picker',
  templateUrl: './check-out-date-picker.component.html',
  styleUrls: ['./check-out-date-picker.component.css']
})
export class CheckOutDatePickerComponent implements OnInit {

  initialDateValue: string = "";

  constructor(private checkOutDataTransferService: CheckOutDataTransferService) { }

  onClickDatePicker(checkOutDate: any) {
    checkOutDate.showPicker();
  }

  ngOnInit(): void {
    this.initialDateValue = this.getDate();
  }

  getCheckOutDate(checkInDate: any) {
    this.checkOutDataTransferService.setCheckOutData(checkInDate.value);
  }

  getDate() {
    var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

}
