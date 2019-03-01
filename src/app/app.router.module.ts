import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { CarInfoWrapper } from './component/dialog/car-info/car-info-wrapper.component';
import { CarInfoComponent } from './component/dialog/car-info/car-info.component';
import { MoviePlayWrapper } from './component/dialog/movie-play/movie-play-wrapper.component';
import { MoviePlayComponent } from './component/dialog/movie-play/movie-play.component';
import { CarstatechangeComponent } from './component/dialog/carstatechange/carstatechange.component';
import { CarStateChangeWrapper } from './component/dialog/carstatechange/car-state-change-wrapper.component';
import { ProhibitmoveComponent } from './component/dialog/prohibitmove/prohibitmove.component';
import { ProhibitMoveWrapper } from './component/dialog/prohibitmove/prohibitmove-wrapper.component';
import { MovieListWrapper } from './component/dialog/movielist/movie-list-wrapper.component'
import { MovielistComponent } from './component/dialog/movielist/movielist.component';

const appRoutes: Routes = [
  { path: 'carmovie/:url', component: MoviePlayWrapper, },
  { path: 'carlist', component: CarInfoWrapper },
  { path: 'carstate', component: CarStateChangeWrapper },
  { path: 'carstop', component: ProhibitMoveWrapper },
  { path: 'movielist', component: MovieListWrapper }
];

@NgModule({
  exports: [
    RouterModule,
  ],
  entryComponents: [CarInfoWrapper, CarInfoComponent, MoviePlayWrapper, MoviePlayComponent,
    CarStateChangeWrapper, CarstatechangeComponent, ProhibitMoveWrapper, ProhibitmoveComponent,
    MovieListWrapper, MovielistComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    BrowserModule
  ],
  declarations: [
    CarInfoWrapper,
    CarInfoComponent,
    CarStateChangeWrapper,
    CarstatechangeComponent,
    MoviePlayWrapper,
    MoviePlayComponent,
    ProhibitMoveWrapper,
    ProhibitmoveComponent,
    MovieListWrapper,
    MovielistComponent,
  ]
})
export class ApprouterModule { }
