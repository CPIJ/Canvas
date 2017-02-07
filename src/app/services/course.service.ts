import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {CourseComponent} from '../components/course.component';

@Injectable()
export class CourseService{
    constructor(public _http: Http){ }

    private _courseUrl = 'https://api.fhict.nl/canvas/courses/me'

    // getCourses() : string[] {
    //     return ["course1", "course2", "course3"]; }

    getCourses() {
        return this._http.get(this._courseUrl).map(res =>)
    }
    
}