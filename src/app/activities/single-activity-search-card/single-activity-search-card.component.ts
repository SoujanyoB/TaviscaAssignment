import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-activity-search-card',
  templateUrl: './single-activity-search-card.component.html',
  styleUrls: ['./single-activity-search-card.component.css']
})
export class SingleActivitySearchCardComponent implements OnInit {

  constructor() { }

  @Input() image = '';
  @Input() title = '';
  @Input() city = '';
  @Input() state = '';
  @Input() startingFare = '';

  points: any;

  ngOnInit(): void {
    this.points = (Math.round(Number.parseFloat(this.startingFare)*100)).toString();
  }

}
