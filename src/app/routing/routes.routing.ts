import { RouterModule, Routes } from '@angular/router';
import { Injectable } from '@angular/core';

// Custor components
import { GradeComponent } from '../components/grade/grade.component';
import { HeaderComponent } from '../components/header/header.component'
import { CalendarComponent } from '../components/calendar/calendar.component'
import { CourseComponent } from '../components/course/course.component';
import { GroupComponent } from '../components/group/group.component';
import { AccountComponent } from '../components/account/account.component';

export class Routing {
    appRoutes: Routes; 

    constructor() {
        this.appRoutes =  [
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
            path: 'account',
            component: AccountComponent
        }
        ]
    }
}