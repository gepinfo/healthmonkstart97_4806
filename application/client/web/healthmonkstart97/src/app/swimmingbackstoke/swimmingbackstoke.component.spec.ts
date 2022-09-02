import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimmingbackstokeComponent } from './swimmingbackstoke.component';

describe('SwimmingbackstokeComponent', () => {
  let component: SwimmingbackstokeComponent;
  let fixture: ComponentFixture<SwimmingbackstokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimmingbackstokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimmingbackstokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});