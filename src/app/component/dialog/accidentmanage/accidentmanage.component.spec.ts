import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentmanageComponent } from './accidentmanage.component';

describe('AccidentmanageComponent', () => {
  let component: AccidentmanageComponent;
  let fixture: ComponentFixture<AccidentmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
