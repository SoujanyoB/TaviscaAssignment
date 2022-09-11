import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-car-search-card',
  templateUrl: './single-car-search-card.component.html',
  styleUrls: ['./single-car-search-card.component.css']
})
export class SingleCarSearchCardComponent implements OnInit {

  constructor() { }
  
  @Input() image = '';
  @Input() type = '';
  @Input() addressLine1 = '';
  @Input() name = '';
  @Input() state = '';
  @Input() startingFare = '';

  points: any;

  ngOnInit(): void {
    this.points = (Math.round(Number.parseFloat(this.startingFare)*100)).toString();
  }

}
