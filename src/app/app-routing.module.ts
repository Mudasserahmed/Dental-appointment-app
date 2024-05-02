import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookFormComponent } from './book-form/book-form.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"signUp",component:SignUpComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"book",component:BookFormComponent},
  {path:"sidenav",component:LayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
