import { Component } from '@angular/core';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.css']
})
export class ContentWrapperComponent {

  activeButton: string = "FLIGHTS";

  clickedFormNavigationButton: string = "";

  constructor() { }

  onClickButton($event: any) {
    if ($event.target.dataset.section != this.activeButton ) {
      $event.target.parentNode.querySelector(`[data-section="${this.activeButton}"]`).classList.remove("active");
      $event.target.classList.add("active");
      this.activeButton = $event.target.dataset.section;
    }
  }

}
