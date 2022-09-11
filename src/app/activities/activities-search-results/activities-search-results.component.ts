import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activities-search-results',
  templateUrl: './activities-search-results.component.html',
  styleUrls: ['./activities-search-results.component.css']
})
export class ActivitiesSearchResultsComponent implements OnInit {

  activities: any;

  constructor(private router: Router) {
    this.activities = this.router.getCurrentNavigation()?.extras.state;
    this.activities = this.activities.searchResults;
   }

  ngOnInit(): void {
    
  }

}
