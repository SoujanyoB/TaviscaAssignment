import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CarsSearchResultsComponent } from './cars-search-results.component';

describe('CarsSearchResultsComponent', () => {
  let component: CarsSearchResultsComponent;
  let fixture: ComponentFixture<CarsSearchResultsComponent>;

  const mockRouter = {
    getCurrentNavigation: jasmine.createSpy('getCurrentNavigation')
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CarsSearchResultsComponent ],
      providers: [{
        provide: Router,
        useValue: mockRouter
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {

    mockRouter.getCurrentNavigation.and.returnValue({
      extras: {
        state: {
          searchResults: {}
        }
      }
    });
    
    fixture = TestBed.createComponent(CarsSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  

});


