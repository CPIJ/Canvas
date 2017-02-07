import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

<<<<<<< HEAD
import { Grades } from '../app/components/grade/grade.component';
import { CalendarComponent } from '../app/components/calendar/calendar.component'
=======
// Custom components
import { Grades } from '../app/components/grade/grade.component';

// Data services
import { GradeService } from '../app/services/grades/grades.service';
import { HttpClient } from '../app/services/http/httpClient.service';
>>>>>>> 273e1a7941bc670df18fe890854cbfd036b5e2d3

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
  providers: [
    GradeService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
