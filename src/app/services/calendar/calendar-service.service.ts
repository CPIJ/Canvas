import { Injectable } from '@angular/core';
import {CalendarComponent} from '../../components/calendar/calendar.component';  
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'; 
import { HttpClient } from '../../services/http/httpClient.service'  
@Injectable()
export class CalendarService {

  constructor(private http: HttpClient) {  
    
  } 

  // Type can be teacher or student
   getTags(type:string){ 
    return this.http.get('https://api.fhict.nl/calendar/tags/'+type) 
      .map(res=> <string[]>res.json()); 
  } 

} 

