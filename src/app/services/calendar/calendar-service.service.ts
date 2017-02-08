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

  getMySchedule(){ 
    return this.http.get('https://api.fhict.nl/schedule/me?days=1&expandTeacher=true&startLastMonday=true&true&includeDeleted=true')
      .map(res=> res.json());
  } 


} 

