import {Injectable}     from '@angular/core';
import {HttpClient} from '../../services/http/httpClient.service';
import {Observable}     from 'rxjs/Observable';
import {AssignmentComponent} from '../../components/assignment/assignment.component';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class AssignmentService{
    constructor(private _http: HttpClient){ }

    private _assignmentUrl = 'https://api.fhict.nl/canvas/course/3724/assignments'

    getCourses() {
        return this._http.get(this._assignmentUrl)
            .map(res => <AssignmentComponent[]>res.json())
    }
}