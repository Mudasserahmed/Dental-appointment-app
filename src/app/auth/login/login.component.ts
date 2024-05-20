import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/utils';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

// export const BASE_URL = "http://10.121.214.86";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   success:boolean = false;
   loginError:boolean  = false ;
   loader:boolean = false;
  formData = {
    password: '',
    email: ''
  };

  constructor(private http: HttpClient,private router: Router,private apiService: ApiService){}


  //submit form function logic
  submitForm(form: any) {
    if (form.valid) {
      this.loader = true 
      localStorage.setItem("user",JSON.stringify(this.formData))
      console.log('Form submitted successfully!', this.formData);
     
      //api call
      this.apiService.post('login',this.formData).subscribe(
        (data:any)=>{
          console.log("login successfull",data)
          this.loader = false
          this.loginError = false
        },
        (error:any)=>{
          console.log("error logging in",error)
          this.loader = false
          this.loginError = true
        }
      )
      // this.http.post(BASE_URL + "/login", this.formData)
      // .pipe(
      //   catchError((error) => {
      //     console.error('Error occurred while submitting form:', error);
      //      this.loginError = true 
      //      this.loader = false ;
      //     return throwError(error); // Rethrow the error to propagate it to the subscriber
      //   })
      // )
      // .subscribe(
      //   (data) => {
      //     console.log('Response from server:', data);
      //     this.loader = false ;
      //     this.success = true
      //     this.formData = {
      //       password: '',
      //       email: ''
      //     }
      //     // this.router.navigate(['/dashboard']);
      //       localStorage.setItem("userData",JSON.stringify(data))
      //       this.router.navigate(['/dashboard'], { skipLocationChange: true });
      //   }
      // );
      // Here you can handle form submission, e.g., sending data to a server
    } else {
      console.log('Form is invalid.');
    }
  }
}
