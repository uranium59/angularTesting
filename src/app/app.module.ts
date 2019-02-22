import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ApprouterModule } from './app.router.module';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { GooglemapComponent } from './component/googlemap/mapfield/googlemap.component';

import { CarmarkerComponent } from './component/googlemap/carmarker/carmarker.component';
import { LeftsidemenuComponent } from './component/leftsidemenu/leftsidemenu.component';

@NgModule({
  declarations: [
    AppComponent,
    GooglemapComponent,
    CarmarkerComponent,
    LeftsidemenuComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAlZ0Wcf-YrcEQKNl6QYPNTmzXTkecDKXM'
    }),
    BrowserAnimationsModule,
    FlexLayoutModule,
    ApprouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
