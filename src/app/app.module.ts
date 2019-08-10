import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrcsLogSearchComponent } from './prcs-log-search/prcs-log-search.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker'

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PrcsLogSearchComponent,   
    HttpClient 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
