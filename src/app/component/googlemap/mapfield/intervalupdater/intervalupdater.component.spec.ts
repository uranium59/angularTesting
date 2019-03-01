import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalupdaterComponent } from './intervalupdater.component';

describe('IntervalupdaterComponent', () => {
  let component: IntervalupdaterComponent;
  let fixture: ComponentFixture<IntervalupdaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervalupdaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalupdaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
