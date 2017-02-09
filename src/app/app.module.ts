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

// Data services
import { GradeService } from '../app/services/grades/grades.service';
import { HttpClient } from '../app/services/http/httpClient.service';
import { GroupService } from '../app/services/groups/groups.service'; 
import {NewsFeedService} from '../app/services/news-feed/news-feed.service'; 

// Routing
import { RouterModule, Routes } from '@angular/router';
import { Routing } from '../app/routing/routes.routing';
import { NewsFeedComponent } from '../app/components/news-feed/news-feed.component'; 

//Custom Pipes 
import {GroupByDatePipe} from '../app/pipes/group-by-date.pipe';  

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
        path: 'news', 
        component: NewsFeedComponent
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
        NewsFeedComponent,  
        GroupByDatePipe
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
        NewsFeedService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
