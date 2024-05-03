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
  public startDate: Date = new Date("2024-01-01");
  public endDate: Date = new Date("2024-12-31");
  public cssClass = "e-custom";

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
   onValueChange(args: any): void {
    /*Displays selected date in the label*/
    console.log(args?.value.toLocaleDateString());
    (<HTMLInputElement>document.getElementById("selected")).textContent =
      "Selected Value: " + args.value.toLocaleDateString();
  }
}
