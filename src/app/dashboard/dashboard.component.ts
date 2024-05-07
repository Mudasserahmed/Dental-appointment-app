import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  inital =  0; 

  constructor(private router:Router){

  }
  // logout logic 
  logout(){
    this.router.navigate(['/login'])
    console.log("local storage cleared")
    localStorage.clear()
  }
  //logo click logic
  logoClick(){
    console.log("image clicked")
    this.router.navigate(["/dashboard"])
   }
   navigateToBook(){
    this.router.navigate(["/book"])
   }
}
