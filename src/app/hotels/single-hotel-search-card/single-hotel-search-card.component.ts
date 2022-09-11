import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-hotel-search-card',
  templateUrl: './single-hotel-search-card.component.html',
  styleUrls: ['./single-hotel-search-card.component.css']
})
export class SingleHotelSearchCardComponent implements OnInit {

  constructor() { }

  @Input() image = '';
  @Input() title = '';
  @Input() addressLine1 = '';
  @Input() city = '';
  @Input() state = '';
  @Input() startingFare = '';

  points: any;

  ngOnInit(): void {
    this.points = (Math.round(Number.parseFloat(this.startingFare)*100)).toString();
  }

}
