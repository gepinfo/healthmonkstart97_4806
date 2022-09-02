import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingtheworkoutsComponent } from './searchingtheworkouts.component';

describe('SearchingtheworkoutsComponent', () => {
  let component: SearchingtheworkoutsComponent;
  let fixture: ComponentFixture<SearchingtheworkoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchingtheworkoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingtheworkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});