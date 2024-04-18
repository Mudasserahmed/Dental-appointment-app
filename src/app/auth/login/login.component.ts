import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/utils';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

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

  constructor(private http: HttpClient,private router: Router){}

  submitForm(form: any) {
    if (form.valid) {
      console.log('Form submitted successfully!', this.formData);
     
      //api call
      this.http.post(BASE_URL + "/user/login", this.formData)
      .pipe(
        catchError((error) => {
          console.error('Error occurred while submitting form:', error);
          // Optionally, you can handle the error here, such as displaying a message to the user
          // For example, you could show a toast message or set a flag to display an error message in your UI
          // Example: this.errorMessage = 'An error occurred. Please try again later.';
          return throwError(error); // Rethrow the error to propagate it to the subscriber
        })
      )
      .subscribe(
        (data) => {
          console.log('Response from server:', data);
          this.success = true
          this.formData = {
            password: '',
            email: ''
          }
            this.router.navigate(['/dashboard']);
        }
      );
      

      // Here you can handle form submission, e.g., sending data to a server
    } else {
      console.log('Form is invalid.');
    }
  }
}
