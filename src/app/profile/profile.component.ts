// profile.component.ts

import { Component } from '@angular/core';
interface FormData  {
  fullName : string,
  email:string ,
  dateOfBirth: string ,
  gender:string,
  phoneNumber: number ,
  address:string,
  city:string,
  country: string 
 }

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent {
  user: FormData = {
    fullName: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    phoneNumber: 0,
    address: '',
    city: '',
    country: ''
  };
  saveProfile() {
    console.log(this.user);
  }
}
