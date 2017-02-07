import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { CourseComponent} from './components/course/course.component';

// Custom components
import { Grade } from '../app/components/grade/grade.component';

// Data services
import { GradeService } from '../app/services/grades/grades.service';
import { HttpClient } from '../app/services/http/httpClient.service';

import { AuthenticatedHttpService } from '../app/services/http/authenticated-http-service.service';

@NgModule({
  declarations: [
    AppComponent,
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
    { provide: Http, useClass: AuthenticatedHttpService },
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
