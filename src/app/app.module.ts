import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { CourseService } from './course.service';
import { User } from 'src/app/models/user';
import { Course } from 'src/app/models/course';

import { SubscribeComponent } from './common/subscribe/subscribe.component';
import { CommonComponent } from './common/common.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LoginComponent } from './common/login/login.component';
import { SignupComponent } from './common/signup/signup.component';
import { LandingComponent } from './common/landing/landing.component';
import { SearchComponent } from './common/search/search.component';
import { SearchresultComponent } from './common/searchresult/searchresult.component';
import { StudentDashbordComponent } from './student/student-dashbord/student-dashbord.component';
import { StudentHeaderComponent } from './student/student-header/student-header.component';    

import { AppRoutingModule} from './app-routing.module';
import { MentorDashbordComponent } from './mentor/mentor-dashbord/mentor-dashbord.component';
import { MentorHeaderComponent } from './mentor/mentor-header/mentor-header.component';
import { AdminDashbordComponent } from './admin/admin-dashbord/admin-dashbord.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';   


@NgModule({
  declarations: [
    AppComponent,
    SubscribeComponent,
    FooterComponent,
    HeaderComponent,
    CommonComponent,
    LoginComponent,
    SignupComponent,
    LandingComponent,
    SearchComponent,
    SearchresultComponent,
    StudentDashbordComponent,
    StudentHeaderComponent,
    MentorDashbordComponent,
    MentorHeaderComponent,
    AdminDashbordComponent,
    AdminHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    DataService,
    User,
    CourseService,
    Course
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
