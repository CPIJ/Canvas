import {Router, ActivatedRoute, Params} from '@angular/router';
import {OnInit, OnDestroy} from '@angular/core';

import { Component } from '@angular/core';
import { AssignmentService } from '../../services/assignment/assignment.service';



@Component({
    selector: 'assignments',
    template: `
    <h2>assignments</h2>
    {{title}}
        <ul>
        <li *ngFor="let assignment of assignments">
        {{assignment.name}}
        </li>
    </ul>

    `,
    providers: [AssignmentService]

})

export class AssignmentComponent {
    title = "dit is de titel";
    private assignments: AssignmentComponent[];


    constructor(assignmentService: AssignmentService, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe((params: Params) => {
        let Id = params['id'];
        console.log(Id);
        assignmentService.getAssignments(Id).subscribe(r => this.assignments = r);
      });

        
    }


}
