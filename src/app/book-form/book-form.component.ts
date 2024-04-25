import { Component } from '@angular/core';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
   formData = {
    fullName : '',
    phone:"",
    insurance:'',
   }

   submitForm(formData:any){
   
   }
}
