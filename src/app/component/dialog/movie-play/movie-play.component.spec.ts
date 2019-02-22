import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePlayComponent } from './movie-play.component';

describe('MoviePlayComponent', () => {
  let component: MoviePlayComponent;
  let fixture: ComponentFixture<MoviePlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
