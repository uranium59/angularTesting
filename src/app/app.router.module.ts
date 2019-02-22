import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { CarInfoWrapper } from './component/dialog/car-info/car-info-wrapper.component';
import { CarInfoComponent } from './component/dialog/car-info/car-info.component';
import { MoviePlayWrapper } from './component/dialog/movie-play/movie-play-wrapper.component';
import { MoviePlayComponent } from './component/dialog/movie-play/movie-play.component';


const appRoutes: Routes = [
  { path: 'carmovie/:url', component: MoviePlayWrapper,  },
  { path: 'carinfo/:id', component: CarInfoComponent}
];

@NgModule({
  exports: [
    RouterModule
  ],
  entryComponents: [CarInfoWrapper, CarInfoComponent, MoviePlayWrapper, MoviePlayComponent],
  imports: [RouterModule.forRoot(appRoutes),
    MaterialModule
  ],
  declarations: [
    CarInfoWrapper,
    CarInfoComponent,
    MoviePlayWrapper,
    MoviePlayComponent
  ]
})
export class ApprouterModule { }
