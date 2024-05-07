import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'Dental Appointement App';
  displayButton: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url;
        // Check if current route is login or signup
        if (currentRoute.includes('login') || currentRoute.includes('signUp') || currentRoute === "/" ) {
          this.displayButton = false;
        } else {
          this.displayButton = true;
        }
      }
    });
  }
  logout(){
    this.router.navigate(['/login'])
    console.log("local storage cleared")
    localStorage.clear()
  }
  //logo click logic
  logoClick(){
    console.log("image clicked")
    this.router.navigate(["/dashboard"])
   }
}
