import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { Grades } from '../app/components/grade/grade.component';
import { CalendarComponent } from '../app/components/calendar/calendar.component'

@NgModule({
  declarations: [
    AppComponent,
    Grades,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
