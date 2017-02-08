import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, URLSearchParams } from '@angular/http';
import { Router, ActivatedRoute} from '@angular/router';

import { AppComponent } from './app.component';

// Custom components
import { GradeComponent } from '../app/components/grade/grade.component';
import { HeaderComponent } from '../app/components/header/header.component';
import { CalendarComponent } from '../app/components/calendar/calendar.component';
import { CourseComponent } from './components/course/course.component';
import { GroupComponent } from './components/group/group.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';

// Data services
import { GradeService } from '../app/services/grades/grades.service';
import { HttpClient } from '../app/services/http/httpClient.service';
import { GroupService } from '../app/services/groups/groups.service';
import { AuthenticatedHttpService } from '../app/services/http/authenticated-http-service.service';

// Routing
import { RouterModule, Routes } from '@angular/router';
import { Routing } from '../app/routing/routes.routing';

const appRoutes: Routes =  [
        {
            path: 'courses',
            component: CourseComponent
        },
        {
            path: 'grades',
            component: GradeComponent
        },
        {
            path: 'calendar',
            component: CalendarComponent
        },
        {
            path: 'groups',
            component: GroupComponent
        },
        {
            path: 'courses/assignments/:id',            
            component: AssignmentComponent
        },
]

// Module info
@NgModule({
    declarations: [
        AppComponent,
        CalendarComponent,
        CourseComponent,
        GradeComponent,
        HeaderComponent,
        GroupComponent,
        AssignmentComponent,
        LoggedInComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        GradeService,
        GroupService,
        HttpClient, 
       { provide: Http, useClass: AuthenticatedHttpService },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private route: ActivatedRoute, private router: Router) 
  { 
      this.route.fragment.subscribe((fragment: string) => {
          if (fragment == undefined || fragment == "")
              return;
          
          let params = new URLSearchParams(fragment);
          HttpClient.token = params.get('access_token');
          let loc = params.get('status');

          if (loc != undefined)
            this.router.navigate([loc]);
      });     
  }
}