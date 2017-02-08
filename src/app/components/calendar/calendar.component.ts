import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../../services/calendar/calendar-service.service';
import {plannedItem} from '../calendar/plannedItem';
@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [CalendarService],


})
export class CalendarComponent implements OnInit {

  Schedule: any;
  Title: string;
  Classes: string[]; 
  PlannedItems: plannedItem[]; 

  constructor(private calendarService: CalendarService) { 
    //Differs from other objects in the application because of the complexity of the object  
    //Therefore it is easier to split the different parts into seperate objects 
    this.calendarService.getMySchedule().subscribe((data) => this.Title = data.title) 
    this.calendarService.getMySchedule().subscribe((data) => this.PlannedItems = <plannedItem[]>data.data) 
    this.calendarService.getMySchedule().subscribe((data) => console.log(data))


  }

  ngOnInit() {
  }

}



