import { Component } from '@angular/core';
import { CourseService } from '../../services/course/course.service';



@Component({
    selector: 'courses',
    templateUrl: 'course.component.html',
    providers: [CourseService]

})

export class CourseComponent {
    private courses: Course[];

    constructor(courseService: CourseService) {
        courseService.getCourses().subscribe(r => {

            this.courses = [];

            for (let i = 0; i < r.length; i++) {
                this.courses.push(new Course(r[i]))
            }
        });
    }

    goAssignments(id) {
        window.location.href = '/courses/assignments/' + id;
    }
}


export class Course {
    id: number;

    constructor(data: Object = {}) {
        Object.assign(this, data)
    }
}


