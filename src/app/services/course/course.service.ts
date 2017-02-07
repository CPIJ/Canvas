import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {CourseComponent} from '../../components/course/course.component';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Course } from '../../components/course/course.component';

@Injectable()
export class CourseService{
    constructor(private _http: Http){ }

    private _courseUrl = 'https://api.fhict.nl/canvas/courses/me'

    // getCourses() : string[] {
    //     return ["course1", "course2", "course3"]; }

    getCourses() : Course[] {

        let obs = this._http.get(this._courseUrl)
            .map(res => {
                let body = res.json()
                return body.data || { }
            })
            .catch(err => {
                return Observable.throw(err)
            })
        
        console.log(obs.subscribe())

        return [];
    }
    
}