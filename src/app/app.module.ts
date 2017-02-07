import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { CourseComponent} from './components/course/course.component';

<<<<<<< HEAD
import { Grades } from '../app/components/grade/grade.component';
import { CalendarComponent } from '../app/components/calendar/calendar.component'
=======
// Custom components
import { Grade } from '../app/components/grade/grade.component';

// Data services
import { GradeService } from '../app/services/grades/grades.service';
import { HttpClient } from '../app/services/http/httpClient.service';
>>>>>>> 273e1a7941bc670df18fe890854cbfd036b5e2d3

import { AuthenticatedHttpService } from '../app/services/http/authenticated-http-service.service';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    Grades,
    CalendarComponent
=======
    CourseComponent,
    Grade
>>>>>>> 57a0645a8ce4d140bc7a6b28557384517b18dd8c
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    GradeService,
    { provide: Http, useClass: AuthenticatedHttpService },
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
