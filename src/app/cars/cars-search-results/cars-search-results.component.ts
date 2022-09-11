import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars-search-results',
  templateUrl: './cars-search-results.component.html',
  styleUrls: ['./cars-search-results.component.css']
})
export class CarsSearchResultsComponent {

  data: any;
  carRentals: any;
  vehicles: any;

  constructor(private router: Router) { 

    this.data = this.router.getCurrentNavigation()?.extras.state;

    this.vehicles = this.data.vehicles;
    this.carRentals = this.data.carRentals;
    
  }



  getFareForVehicle(vehicle: any) {
    var result = "";

    this.carRentals.forEach((carRental: any) => {
      if(carRental.vehicleRefId == vehicle.refId) {
        result = carRental.displayFare.totalFare.toString();
      }
    });

    return result;
  }

}
