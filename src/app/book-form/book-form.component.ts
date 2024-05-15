import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';



@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  selected = false
  selectedDate = null
  //calender logic
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    selectable:true,
    dateClick: (arg) => this.handleDateClick(arg),
    events: [
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' }
    ],
    eventClassNames: ['selected-date'] 
  };

  //date click logic
  handleDateClick(arg: any) {
    console.log('date click! ' + arg.dateStr);
    this.selected = true
    this.selectedDate = arg.dateStr
  }
  SubmitBook(){
    console.log(this.selectedDate)
  }
  }
