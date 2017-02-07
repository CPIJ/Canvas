import { Component, OnInit } from '@angular/core'; 
import {CalendarService} from '../../services/calendar/calendar-service.service'; 

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  Tag: string[]; 
  
  constructor() { 
   }

  ngOnInit() {
  }

}
