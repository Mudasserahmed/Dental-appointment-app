import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  inital =  0; 

constructor(){

}

  // logout logic 
  logout(){
    console.log("local storage cleared")
    localStorage.clear()
  }
}
