import { Component } from '@angular/core';
import { CourseService } from '../../services/course/course.service';


@Component({
    selector: 'courses',
    template: `
    <h2>Courses</h2>
    {{title}}
        <ul>
        <li *ngFor="let course of courses">
        {{course}}
        </li>
    </ul>

    `,
    providers: [CourseService]

})

export class CourseComponent {
    title = "dit is de titel";
    private courses: Course[];

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }

}

export interface Course{
    id: number;
    name: string;
}

