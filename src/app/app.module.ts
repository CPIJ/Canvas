import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

// Custom components
import { GradeComponent } from '../app/components/grade/grade.component';
import { HeaderComponent } from '../app/components/header/header.component'
import { CalendarComponent } from '../app/components/calendar/calendar.component'
import { CourseComponent } from './components/course/course.component';
import { GroupComponent } from './components/group/group.component';
import { AssignmentComponent } from '../app/components/assignment/assignment.component';
import { NewsFeedComponent } from '../app/components/news-feed/news-feed.component';
import { AccountComponent } from '../app/components/account/account.component';

// Data services
import { GradeService } from '../app/services/grades/grades.service';
import { HttpClient } from '../app/services/http/httpClient.service';
import { GroupService } from '../app/services/groups/groups.service';
import { AccountService } from '../app/services/account/account.service';
import { CourseService } from '../app/services/course/course.service';

// Routing
import { RouterModule, Routes } from '@angular/router';
import { Routing } from '../app/routing/routes.routing';

const appRoutes: Routes = [
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
        {
            path: 'account',
            component: AccountComponent
        }
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
        AccountComponent,
        NewsFeedComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        GradeService,
        HttpClient,
        GroupService,
        AccountService,
        CourseService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
