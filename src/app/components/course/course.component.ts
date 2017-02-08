import { Component } from '@angular/core';
import { CourseService } from '../../services/course/course.service';



@Component({
    selector: 'courses',
    template: `
    <h2>Courses</h2>
    {{title}}
        <ul>
        <li  *ngFor="let course of courses">
        <a (click)="goAssignments(course.id)"> {{course.name}} </a>
        </li>
    </ul>

    `,
    providers: [CourseService]

})

export class CourseComponent {
    title = "dit is de titel";
    private courses: CourseComponent[];


    constructor(courseService: CourseService) {
        courseService.getCourses().subscribe(r => this.courses = r);
    }

    goAssignments(id)
    {
        window.location.href='/courses/assignments/' + id;
    }

}


