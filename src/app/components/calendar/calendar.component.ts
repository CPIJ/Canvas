import { Component, OnInit } from '@angular/core'; 
import {CalendarService} from '../../services/calendar/calendar-service.service';  

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'], 
  providers: [CalendarService]
})
export class CalendarComponent implements OnInit {

  Tags: string[]; 
  
  constructor(private calendarService:CalendarService) {  
    this.calendarService.getTags("Students").subscribe(r=>this.Tags = r);
   }

  ngOnInit() {
  }

}
