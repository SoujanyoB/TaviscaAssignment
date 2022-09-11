import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-count',
  templateUrl: './guest-count.component.html',
  styleUrls: ['./guest-count.component.css']
})
export class GuestCountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showTravellerCountModifier(travellerCountModifierPopup: any) {
    travellerCountModifierPopup.style.visibility = 'visible';
  }

  closeTravellerCountModifier(travellerCountModifierPopup: any) {
    travellerCountModifierPopup.style.visibility = 'collapse';
  }

}
