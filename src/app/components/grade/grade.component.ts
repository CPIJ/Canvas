import { Component } from '@angular/core'
import { GradeService } from '../../services/grades/grades.service'

@Component({
    selector: 'grades',
    templateUrl: 'grade.component.html',
    styleUrls: ['grade.component.css']
})

export class GradeComponent {

    grades: GradeComponent[]
    date: Date;
    item: string;
    itemCode: string;
    grade: number;
    passed: boolean;

    constructor(private gradeService: GradeService) {
        gradeService.getGrades().subscribe(r => this.grades = r);
    }
}