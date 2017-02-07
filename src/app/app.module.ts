import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CourseComponent} from './components/course/course.component';
import { CalendarComponent } from '../app/components/calendar/calendar.component'
// Custom components
import { Grade } from '../app/components/grade/grade.component';
// Data services
import { GradeService } from '../app/services/grades/grades.service';
import { HttpClient } from '../app/services/http/httpClient.service';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CourseComponent,
    Grade
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
