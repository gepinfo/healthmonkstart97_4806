import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchworkoutsComponent } from './searchworkouts.component';

describe('SearchworkoutsComponent', () => {
  let component: SearchworkoutsComponent;
  let fixture: ComponentFixture<SearchworkoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchworkoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchworkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});