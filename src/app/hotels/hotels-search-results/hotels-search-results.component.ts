import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels-search-results',
  templateUrl: './hotels-search-results.component.html',
  styleUrls: ['./hotels-search-results.component.css']
})
export class HotelsSearchResultsComponent implements OnInit {

  hotels: any

  constructor(private router: Router) {
    this.hotels = router.getCurrentNavigation()?.extras.state;
    this.hotels = this.hotels.searchResults;
  }




  ngOnInit(): void {
  }

}
