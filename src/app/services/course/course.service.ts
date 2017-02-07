import {Injectable}     from '@angular/core';
import {HttpClient} from '../../services/http/httpClient.service';
import {Observable}     from 'rxjs/Observable';
import {CourseComponent} from '../../components/course/course.component';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { Course } from '../../components/course/course.component';

@Injectable()
export class CourseService{
    constructor(private _http: HttpClient){ }

    private _courseUrl = 'https://api.fhict.nl/canvas/courses/me'

    // getCourses() : string[] {
    //     return ["course1", "course2", "course3"]; }

    getCourses() {
        return this._http.get(this._courseUrl)
            .map(res => <Course[]>res.json())
    }
    
}