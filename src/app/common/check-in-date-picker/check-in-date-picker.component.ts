import { Component, Input, OnInit } from '@angular/core';
import { CheckInDataTransferService } from 'src/app/services/data-transfer/check-in-data-transfer.service';


@Component({
  selector: 'app-check-in-date-picker',
  templateUrl: './check-in-date-picker.component.html',
  styleUrls: ['./check-in-date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  initialDateValue: string = "";

  constructor(private checkInDataTransferService: CheckInDataTransferService) {

  }

  onClickDatePicker(checkInDate: any) {
    checkInDate.showPicker();
  }

  getCheckInDate(checkInDate: any) {
    this.checkInDataTransferService.setCheckInData(checkInDate.value);
  }

  ngOnInit(): void {
    this.initialDateValue = this.getDate();
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
