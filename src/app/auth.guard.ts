import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if user is authenticated
    // const userData = localStorage.getItem("userData")
    // console.log("user",userData)
    // const token = JSON.parse(userData?.accessToken)
    if (localStorage.getItem("userData")) {
      // If user is authenticated, redirect to dashboard or any other authenticated route
      this.router.navigate(['/dashboard']);
      return false;
    }
    // If user is not authenticated, allow access to the route
    this.router.navigate(["/login"])
    return true;
  }
}
