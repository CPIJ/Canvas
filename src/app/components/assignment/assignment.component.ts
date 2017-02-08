import { Router, ActivatedRoute, Params } from '@angular/router';
import { OnInit, OnDestroy } from '@angular/core';

import { Component } from '@angular/core';
import { AssignmentService } from '../../services/assignment/assignment.service';
import { CourseComponent, Course } from '../../components/course/course.component';
import { CourseService } from '../../services/course/course.service';

@Component({
    selector: 'assignments',
    templateUrl: 'assignment.component.html',
    providers: [AssignmentService]
})

export class AssignmentComponent {
    private assignments: AssignmentComponent[];
    private course: Course;


    constructor(courseService: CourseService, assignmentService: AssignmentService, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe((params: Params) => {
            let Id = params['id'];
            assignmentService.getAssignments(Id).subscribe(r => this.assignments = r);
            courseService.getCourses().subscribe(r => {
                this.course = r.filter(c => c.id == Id)[0]
            }
            )
        });
    }
}
