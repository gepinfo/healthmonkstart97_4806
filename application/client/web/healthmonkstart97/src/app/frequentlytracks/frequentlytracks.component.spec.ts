import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentlytracksComponent } from './frequentlytracks.component';

describe('FrequentlytracksComponent', () => {
  let component: FrequentlytracksComponent;
  let fixture: ComponentFixture<FrequentlytracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequentlytracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentlytracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});