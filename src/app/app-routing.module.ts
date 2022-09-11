import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesSearchResultsComponent } from './activities/activities-search-results/activities-search-results.component';
import { AppComponent } from './app.component';
import { CarsSearchResultsComponent } from './cars/cars-search-results/cars-search-results.component';
import { HomeComponent } from './home/home/home.component';
import { HotelsSearchResultsComponent } from './hotels/hotels-search-results/hotels-search-results.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'results/hotel',
    component: HotelsSearchResultsComponent
  },
  {
    path: 'results/activities',
    component: ActivitiesSearchResultsComponent    
  },
  {
    path: 'results/cars',
    component: CarsSearchResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
