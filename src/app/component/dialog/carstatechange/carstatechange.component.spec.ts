import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarstatechangeComponent } from './carstatechange.component';

describe('CarstatechangeComponent', () => {
  let component: CarstatechangeComponent;
  let fixture: ComponentFixture<CarstatechangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarstatechangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarstatechangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
