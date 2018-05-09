import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import {PeopleService} from './people.service';
import { EyeColorComponent } from './eye-color/eye-color.component';
import { InterestingStatisticComponent } from './interesting-statistic/interesting-statistic.component';
import { CommonSurnamesComponent } from './common-surnames/common-surnames.component';
import { ClosestEiffelTowerComponent } from './closest-eiffel-tower/closest-eiffel-tower.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    EyeColorComponent,
    InterestingStatisticComponent,
    CommonSurnamesComponent,
    ClosestEiffelTowerComponent
  ],
  // telling angular we are using these
  imports: [
    BrowserModule,
    HttpClientModule   // include tool to communicate over http
  ],
  providers: [ PeopleService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
