import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CourseComponent} from './components/course/course.component';

// Custom components
import { Grades } from '../app/components/grade/grade.component'

// Data services
import { GradeService } from '../app/services/grades/grades.service'

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
    GradeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
