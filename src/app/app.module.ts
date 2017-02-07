import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CourseComponent} from './components/course/course.component';

// Custom components
import { Grade } from '../app/components/grade/grade.component';
import { Header } from '../app/components/header/header.component'

// Data services
import { GradeService } from '../app/services/grades/grades.service';
import { HttpClient } from '../app/services/http/httpClient.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    Grade,
    Header
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
