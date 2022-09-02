import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimmingbackstokedetailsComponent } from './swimmingbackstokedetails.component';

describe('SwimmingbackstokedetailsComponent', () => {
  let component: SwimmingbackstokedetailsComponent;
  let fixture: ComponentFixture<SwimmingbackstokedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimmingbackstokedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimmingbackstokedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});