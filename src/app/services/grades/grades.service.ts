import { Component } from '@angular/core'
import { Injectable } from '@angular/core'

import { Grade } from '../../components/grade/grade.component'

@Injectable() 

export class GradeService {
    getGrades() : Grade[] {

        let grades = [];

        for (let i = 0; i < 5; i++) {
            grades.push({
                date: '12-12-12',
                item: 'LP: Product',
                itemCode: 'LP-PD',
                grade: 7.5,
                passed: true
            })
        }

        return grades;
    }
}