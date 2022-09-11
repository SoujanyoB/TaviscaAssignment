import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoSuggestDataTransferService } from 'src/app/services/data-transfer/auto-suggest-data-transfer.service';
import { MockService } from 'src/app/services/mock.service';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let mockService = new MockService();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have autoSuggestSearchResults undefined', () => {
    expect(component.autoSuggestSearchResults).toBeUndefined();
  });

  it('should have autoSuggedsAPI initialized', () => {
    expect(component.autoSuggestAPIService).not.toBeUndefined();
  });


  // it('should define autoSuggestSearchResults on showAutoSuggestResultsOnKeyReleased', () => {

  //   const input = fixture.debugElement.nativeElement.querySelector('#search-bar-input');

  //   const event = new KeyboardEvent('keyup',{'key':'a'});

  //   Object.defineProperty(event, 'target', {writable: false, value: input});

  //   component.showAutosuggestResultsOnKeyReleased(event, input);

  //   expect(component.autoSuggestSearchResults).toBeDefined();


  // });

  // it('should run handleListItemClick on function call', () => {
    
    

  // });



});
