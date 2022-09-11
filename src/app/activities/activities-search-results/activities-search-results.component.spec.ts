import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockService } from 'src/app/services/mock.service';

import { ActivitiesSearchResultsComponent } from './activities-search-results.component';

describe('ActivitiesSearchResultsComponent', () => {
  let component: ActivitiesSearchResultsComponent;
  let fixture: ComponentFixture<ActivitiesSearchResultsComponent>;

  const mockRouter = {
    getCurrentNavigation: jasmine.createSpy('getCurrentNavigation')
  }
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ActivitiesSearchResultsComponent],
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
          searchResults: []
        }
      }
    });

    fixture = TestBed.createComponent(ActivitiesSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
