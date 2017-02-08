import { Component } from '@angular/core';
import { CourseService } from '../../services/course/course.service';



@Component({
    selector: 'courses',
    templateUrl: 'course.component.html',
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


