import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/utils';

// export const BASE_URL = "http://10.121.214.86";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   success = false;
  formData = {
    password: '',
    email: ''
  };

  constructor(private toastr: ToastrService,private http: HttpClient){}

  submitForm(form: any) {
    if (form.valid) {
      console.log('Form submitted successfully!', this.formData);
      this.success = true
      this.http.post(BASE_URL +"/user/login"  ,this.formData).subscribe(data=>console.log(data))
      this.formData = {
        password: '',
        email: ''
      }

      // Here you can handle form submission, e.g., sending data to a server
    } else {
      console.log('Form is invalid.');
    }
  }
}
