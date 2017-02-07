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


// Data services
import { GradeService } from '../app/services/grades/grades.service';
import { HttpClient } from '../app/services/http/httpClient.service';
import { GroupService } from '../app/services/groups/groups.service';


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
        GroupComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        GradeService,
        HttpClient
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
