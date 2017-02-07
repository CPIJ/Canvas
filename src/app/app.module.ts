import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';

// Custom components
import { Grades } from '../app/components/grade/grade.component';

// Data services
import { GradeService } from '../app/services/grades/grades.service';
import { HttpClient } from '../app/services/http/httpClient.service';

import { AuthenticatedHttpService } from '../app/services/http/authenticated-http-service.service';

@NgModule({
  declarations: [
    AppComponent,
    Grades
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
