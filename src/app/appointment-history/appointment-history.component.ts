import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.component.html',
  styleUrls: ['./appointment-history.component.css']
})
export class AppointmentHistoryComponent {

  appointment: any = {
    patientName: '',
    doctorName: '',
    date: '',
    time: '',
    reason: '',
    location: '',
    status: ''
  };
  saveAppointment(){
  console.log("appointment history data" ,this.appointment)
  }
}
