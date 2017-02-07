import { Component } from '@angular/core'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Grade } from '../../components/grade/grade.component'

import { HttpClient } from '../../services/http/httpClient.service' 

@Injectable() 

export class GradeService {

    constructor(private http: HttpClient) {

    }

    getGrades()  {

        //Deze code is niet geautorisee.d.

        return this.http.get('https://api.fhict.nl/grades/me')
            .map(res => <Grade[]>res.json())
        

        // Dit werkt wel, soort mock data.    

        // let grades = [];

        // for (let i = 0; i < 5; i++) {
        //     grades.push({
        //         date: '12-12-12',
        //         item: 'LP: Product',
        //         itemCode: 'LP-PD',
        //         grade: 7.5,
        //         passed: true
        //     })
        // }

        // return grades;
    }
}