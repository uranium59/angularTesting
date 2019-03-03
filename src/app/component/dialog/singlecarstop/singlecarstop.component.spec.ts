import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglecarstopComponent } from './singlecarstop.component';

describe('SinglecarstopComponent', () => {
  let component: SinglecarstopComponent;
  let fixture: ComponentFixture<SinglecarstopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglecarstopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglecarstopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
