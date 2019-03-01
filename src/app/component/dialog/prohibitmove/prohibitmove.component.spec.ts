import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProhibitmoveComponent } from './prohibitmove.component';

describe('ProhibitmoveComponent', () => {
  let component: ProhibitmoveComponent;
  let fixture: ComponentFixture<ProhibitmoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProhibitmoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProhibitmoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
