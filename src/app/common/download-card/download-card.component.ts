import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download-card',
  templateUrl: './download-card.component.html',
  styleUrls: ['./download-card.component.css']
})
export class DownloadCardComponent implements OnInit {

  constructor() { }

  inputPhoneNumberLabel: string = "";

  onClickInput($event: any) {
    $event.target.placeholder = "";
    this.inputPhoneNumberLabel = "Phone Number";
  }


  ngOnInit(): void {
  }

}
