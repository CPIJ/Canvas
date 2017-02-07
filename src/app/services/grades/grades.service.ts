import { Component } from '@angular/core'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GradeComponent } from '../../components/grade/grade.component'

import { HttpClient } from '../../services/http/httpClient.service' 

@Injectable() 

export class GradeService {

    constructor(private http: HttpClient) {
        
    }

    getGrades()  {
        return this.http.get('https://api.fhict.nl/grades/me')
            .map(res => <GradeComponent[]>res.json())
    }
}