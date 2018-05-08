import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import {PeopleService} from './people.service';
import { EyeColorComponent } from './eye-color/eye-color.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    EyeColorComponent
  ],
  // telling angular we are using these
  imports: [
    BrowserModule,
    HttpClientModule,   // include tool to communicate over http
    NgbModule.forRoot() // for root of app
  ],
  providers: [ PeopleService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
