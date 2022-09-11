import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchButtonComponent } from './common/search-button/search-button.component';
import { TopNavBarComponent } from './common/top-nav-bar/top-nav-bar.component';
import { FooterComponent } from './common/footer/footer.component';
import { DatePickerComponent } from './common/check-in-date-picker/check-in-date-picker.component';
import { CheckOutDatePickerComponent } from './common/check-out-date-picker/check-out-date-picker.component';
import { ContentWrapperComponent } from './common/content-wrapper/content-wrapper.component';
import { SearchBarComponent } from './common/search-bar/search-bar.component';
import { CarsSearchComponent } from './cars/cars-search/cars-search.component';
import { HotelsSearchComponent } from './hotels/hotels-search/hotels-search.component';
import { GuestCountComponent } from './hotels/guest-count/guest-count.component';
import { ActivitiesSearchComponent } from './activities/activities-search/activities-search.component';
import { HotelsSearchResultsComponent } from './hotels/hotels-search-results/hotels-search-results.component';
import { DownloadCardComponent } from './common/download-card/download-card.component';
import { AddHotelRoomComponent } from './hotels/add-hotel-room/add-hotel-room.component';
import { HomeComponent } from './home/home/home.component';
import { ActivitiesSearchResultsComponent } from './activities/activities-search-results/activities-search-results.component';
import { SingleActivitySearchCardComponent } from './activities/single-activity-search-card/single-activity-search-card.component';
import { SingleHotelSearchCardComponent } from './hotels/single-hotel-search-card/single-hotel-search-card.component';
import { CarsSearchResultsComponent } from './cars/cars-search-results/cars-search-results.component';
import { PickUpTimeComponent } from './cars/pick-up-time/pick-up-time.component';
import { DropOffTimeComponent } from './cars/drop-off-time/drop-off-time.component';
import { SingleCarSearchCardComponent } from './cars/single-car-search-card/single-car-search-card.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchButtonComponent,
    TopNavBarComponent,
    FooterComponent,
    DatePickerComponent,
    CheckOutDatePickerComponent,
    ContentWrapperComponent,
    SearchBarComponent,
    CarsSearchComponent,
    HotelsSearchComponent,
    GuestCountComponent,
    ActivitiesSearchComponent,
    HotelsSearchResultsComponent,
    DownloadCardComponent,
    AddHotelRoomComponent,
    HomeComponent,
    ActivitiesSearchResultsComponent,
    SingleActivitySearchCardComponent,
    SingleHotelSearchCardComponent,
    CarsSearchResultsComponent,
    PickUpTimeComponent,
    DropOffTimeComponent,
    SingleCarSearchCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
