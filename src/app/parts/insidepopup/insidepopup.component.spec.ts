import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsidepopupComponent } from './insidepopup.component';

describe('InsidepopupComponent', () => {
  let component: InsidepopupComponent;
  let fixture: ComponentFixture<InsidepopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsidepopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsidepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
