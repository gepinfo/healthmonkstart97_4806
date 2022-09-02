import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Frequentlytrack Component } from './frequentlytrack .component';

describe('Frequentlytrack Component', () => {
  let component: Frequentlytrack Component;
  let fixture: ComponentFixture<Frequentlytrack Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Frequentlytrack Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Frequentlytrack Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});