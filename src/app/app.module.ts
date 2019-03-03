import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeStorageService } from './service/fakestorage.service';

import { ApprouterModule } from './app.router.module';

import { AgmCoreModule } from './core/index';

import { AppComponent } from './app.component';
import { GooglemapComponent } from './component/googlemap/mapfield/googlemap.component';
import { IntervalupdaterComponent } from './component/googlemap/mapfield/intervalupdater/intervalupdater.component';

import { CarmarkerComponent } from './component/googlemap/carmarker/carmarker.component';
import { LeftsidemenuComponent } from './component/leftsidemenu/leftsidemenu.component';
import { SinglecarstopComponent } from './component/dialog/singlecarstop/singlecarstop.component';

import { LoginCheckService } from './service/logincheck.service';

@NgModule({
  declarations: [
    AppComponent,
    GooglemapComponent,
    IntervalupdaterComponent,
    CarmarkerComponent,
    LeftsidemenuComponent,
    SinglecarstopComponent,
  ],
  entryComponents: [
    SinglecarstopComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      enableHtml: true
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAlZ0Wcf-YrcEQKNl6QYPNTmzXTkecDKXM'
    }),
    BrowserAnimationsModule,
    FlexLayoutModule,
    ApprouterModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      FakeStorageService, { dataEncapsulation: false }
    )
  ],
  providers: [LoginCheckService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
