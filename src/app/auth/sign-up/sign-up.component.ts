import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/utils';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
interface FormData {
fullName: string;
age: number;
email: string;
password: string;
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  success = false;
    formData :FormData = {
     age:0,
    fullName: '',
    email:'',
    password:'',
    };
   constructor(private http: HttpClient,private router: Router){}
  submitForm(form: any) {
    if (form.valid) {
      console.log('Form submitted successfully!', this.formData);
     this.success = true
        
      //api request   
      this.http.post(BASE_URL + "/user/register", this.formData)
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
          this.router.navigate(['/login']);
        }
      );
       this.formData = {
        fullName: '',
        age:0,
        email:'',
        password:'',
        };
      // Here you can handle form submission, e.g., sending data to a server
    } else {
      console.log('Form is invalid.');
    }
  }
}
