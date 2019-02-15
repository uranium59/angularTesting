import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InsidepopupModule } from './parts/insidepopup.module';

import { AppComponent } from './app.component';
import { GooglemapComponent } from './googlemap/googlemap.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    GooglemapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAlZ0Wcf-YrcEQKNl6QYPNTmzXTkecDKXM'
    }),
    InsidepopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
