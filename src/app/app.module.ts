import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CourseComponent} from './components/course/course.component';

// Custom components
import { Grades } from '../app/components/grade/grade.component';

// Data services
import { GradeService } from '../app/services/grades/grades.service';
import { HttpClient } from '../app/services/http/httpClient.service';
import { GroupService } from '../app/services/groups/groups.service';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    Grades
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
