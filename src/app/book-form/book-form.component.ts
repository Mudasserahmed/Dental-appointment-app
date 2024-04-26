import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface  FormData   {
  fullName:string
  phone:string
  insurance:string
  appDate:null
}
@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})

export class BookFormComponent {
   formData:FormData = {
    fullName : "",
    phone:"",
    insurance:'',
    appDate:null

   }

   constructor(private router:Router){}

   submitForm(formData:any){
   
   }
   logoClick(){
    console.log("image clicked")
    this.router.navigate(["/dashboard"])
   }
}
