import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CardsComponent } from './cards/cards.component';
import { BookFormComponent } from './book-form/book-form.component';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NavbarComponent } from './navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component'; 
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    CardsComponent,
    BookFormComponent,
    TableComponent,
    NavbarComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSelectModule,
    CalendarModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    ToastrModule.forRoot()
  ],    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
