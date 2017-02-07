import {Injectable}     from '@angular/core';
import {HttpClient} from '../../services/http/httpClient.service';
import {Observable}     from 'rxjs/Observable';
import {AssignmentComponent} from '../../components/assignment/assignment.component';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class AssignmentService{
    constructor(private _http: HttpClient){ }

   

    getAssignments(id) {
        console.log("hallo" + id)
         let _assignmentUrl = 'https://api.fhict.nl/canvas/course/' + id +'/assignments'

        return this._http.get(_assignmentUrl)
            .map(res => <AssignmentComponent[]>res.json())
    }
}