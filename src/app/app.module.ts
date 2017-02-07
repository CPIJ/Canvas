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

// Data services
import { GradeService } from '../app/services/grades/grades.service';
import { HttpClient } from '../app/services/http/httpClient.service';

// Routing
import { RouterModule, Routes } from '@angular/router';

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
]

// Module info

@NgModule({
    declarations: [
        AppComponent,
        CalendarComponent,
        CourseComponent,
        GradeComponent,
        HeaderComponent
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
