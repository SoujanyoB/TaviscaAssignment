import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { HotelsSearchResultsComponent } from './hotels-search-results.component';

describe('HotelsSearchResultsComponent', () => {
  let component: HotelsSearchResultsComponent;
  let fixture: ComponentFixture<HotelsSearchResultsComponent>;

  const mockRouter = {
    getCurrentNavigation: jasmine.createSpy('getCurrentNavigation')
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ HotelsSearchResultsComponent ],
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

    fixture = TestBed.createComponent(HotelsSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
