import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
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
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ProfileComponent } from './profile/profile.component';
import { MatCardModule } from '@angular/material/card';
import { AppointmentHistoryComponent } from './appointment-history/appointment-history.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { StripeCheckoutComponent } from './stripe-checkout/stripe-checkout.component'; 
// import { DayGridModule } from '@fullcalendar/daygrid';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    CardsComponent,
    BookFormComponent,
    TableComponent,
    LayoutComponent,
    PageNotFoundComponent,
    ProfileComponent,
    AppointmentHistoryComponent,
    FeedbackComponent,
    StripeCheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatPaginatorModule,
    MatSelectModule,
    CalendarModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,  
    MatToolbarModule,
    FullCalendarModule, 
    ToastrModule.forRoot()
  ],    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
