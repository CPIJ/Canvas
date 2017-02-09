import { Component } from '@angular/core';
import { CourseService } from '../../services/course/course.service';
import {Router} from '@angular/router'



@Component({
    selector: 'courses',
    templateUrl: 'course.component.html',
    providers: [CourseService]

})

export class CourseComponent {
    private courses: Course[];

    constructor(public router: Router ,courseService: CourseService) {
        courseService.getCourses().subscribe(r => {

            this.courses = [];

            for (let i = 0; i < r.length; i++) {
                this.courses.push(new Course(r[i]))
            }
        });
    }

    goAssignments(id) {
        this.router.navigate(['/courses/assignments/' + id]); 
    }
}


export class Course {
    id: number;

    constructor(data: Object = {}) {
        Object.assign(this, data)
    }
}


