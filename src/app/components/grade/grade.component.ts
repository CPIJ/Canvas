import { Component } from '@angular/core'
import { GradeService } from '../../services/grades/grades.service'

@Component({
    selector: 'grades',
    templateUrl: 'grade.component.html',
    styleUrls: ['grade.component.css']
})

export class GradeComponent {

    grades: IGrade[]
    availableYears: number[];

    constructor(private gradeService: GradeService) {
        this.grades = [];
        this.availableYears = [];

        gradeService.getGrades().subscribe(r => this.ConstructObject(r));
    }

    ConstructObject(data) {
        for (let i = 0; i < data.length; i++) {
            this.grades.push(new IGrade(data[i]));

            let currentYear = data[i].date.substring(0,4)

            if (this.availableYears.indexOf(currentYear) == -1) {
                this.availableYears.push(currentYear)
            } 
        }
    }
}

export class IGrade {
    date: Date;
    item: string;
    itemCode: string;
    grade: number;
    passed: boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}