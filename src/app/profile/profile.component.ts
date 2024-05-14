// profile.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any = {
    fullName: '',
    email: '',
    phoneNumber: '',
    address: ''
  };

  saveProfile() {
    // For demonstration purposes, log user profile data to console
    console.log(this.user);
    // You can implement HTTP requests to save data to backend here
  }
}
