import { Component } from '@angular/core'
import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Grade } from '../../components/grade/grade.component'

@Injectable() 

export class GradeService {

    constructor(private http: Http) {

    }

    getGrades() : Grade[] {

        // //Deze code is niet geautorisee.d.

        // let obs = this.http.get('https://api.fhict.nl/grades/me')
        //     .map(res => {
        //         let body = res.json()
        //         return body.data || { }
        //     })
        //     .catch(err => {
        //         return Observable.throw(err)
        //     })
        
        // console.log(obs.subscribe())

        // return [];
            

        // Dit werkt wel, soort mock data.    

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