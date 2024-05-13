import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dental Appointment App';
  displayButton: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url;
        // Check if current route is login, signup, or not found
        if (currentRoute.includes('login') || currentRoute.includes('signUp') || currentRoute === "/"  || this.activatedRoute.snapshot.firstChild?.routeConfig?.path === '**') {
          this.displayButton = false;
        } else {
          this.displayButton = true;
        }
      }
    });
  }

  logout(): void {
    this.router.navigate(['/login']);
    console.log("local storage cleared");
    localStorage.clear();
  }

  logoClick(): void {
    console.log("image clicked");
    this.router.navigate(["/dashboard"]);
  }
}
