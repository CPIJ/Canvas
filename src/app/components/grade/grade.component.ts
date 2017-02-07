import { Component } from '@angular/core'
import { GradeService } from '../../services/grades/grades.service'

@Component({
    selector: 'grades',
    templateUrl: 'grade.component.html',
    styleUrls: ['grade.component.css']
})

export class Grades {

    private grades : Grade[]

    constructor(private gradeService: GradeService) {
        this.grades = gradeService.getGrades();
    }
}

export interface Grade {
    date: Date;
    item: string;
    itemCode: string;
    grade: number;
    passed: boolean;
}
