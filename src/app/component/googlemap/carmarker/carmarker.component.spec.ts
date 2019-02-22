import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmarkerComponent } from './carmarker.component';

describe('CarmarkerComponent', () => {
  let component: CarmarkerComponent;
  let fixture: ComponentFixture<CarmarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarmarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarmarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
