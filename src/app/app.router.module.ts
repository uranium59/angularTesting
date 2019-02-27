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

const appRoutes: Routes = [
  { path: 'carmovie/:url', component: MoviePlayWrapper, },
  { path: 'carlist', component: CarInfoWrapper },
  { path: 'carstate', component: CarStateChangeWrapper }
];

@NgModule({
  exports: [
    RouterModule,
  ],
  entryComponents: [CarInfoWrapper, CarInfoComponent, MoviePlayWrapper, MoviePlayComponent,
    CarStateChangeWrapper, CarstatechangeComponent
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
    MoviePlayComponent
  ]
})
export class ApprouterModule { }
