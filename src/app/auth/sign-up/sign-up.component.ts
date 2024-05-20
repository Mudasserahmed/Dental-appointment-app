import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/utils';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';
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
  success:boolean = false;
  loader:boolean = false;
  loginError:boolean = false
    formData :FormData = {
     age:0,
    fullName: '',
    email:'',
    password:'',
    };
   constructor(private http: HttpClient,private router: Router,private apiService:ApiService){}
   submitForm(form:any) {
    if (form.valid) {
      this.loader = true;
      // Your API request logic goes here
      this.apiService.post("user/register",this.formData).subscribe(
        (data)=>{
          console.log("user register successful",data)
          this.loader = false
          this.loginError = false
        },
        (error)=>{
          console.log("error while registering",error)
          this.loader = false
          this.loginError = true
        }
      )
      // this.http.post(BASE_URL + "/user/register", this.formData)
      //   .pipe(
      //     catchError((error) => {
      //       console.error('Error occurred while submitting form:', error);
      //       this.loader = false; // Ensure loader is stopped on error
      //       this.loginError = true
      //       return throwError(error);
      //     })
      //   )
      //   .subscribe(
      //     (data) => {
      //       console.log('Response from server:', data);
      //       this.success = true;
      //       this.loader = false;
      //       this.router.navigate(['/login']);
      //       this.resetForm();
      //     }
      //   );
    } else {
      console.log('Form is invalid.');
    }
  }

  resetForm() {
    this.formData = {
      fullName: '',
      age: 0,
      email: '',
      password: '',
    };
  }
}
