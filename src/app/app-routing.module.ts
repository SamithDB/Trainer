import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscribeComponent } from './common/subscribe/subscribe.component';
import { CommonComponent } from './common/common.component';
import { LoginComponent } from './common/login/login.component';
import { SignupComponent } from './common/signup/signup.component';
import { LandingComponent } from './common/landing/landing.component';
import { SearchresultComponent } from './common/searchresult/searchresult.component';
import { StudentDashbordComponent } from './student/student-dashbord/student-dashbord.component';
import { MentorDashbordComponent } from './mentor/mentor-dashbord/mentor-dashbord.component';
import { AdminDashbordComponent } from './admin/admin-dashbord/admin-dashbord.component';

const appRoutes: Routes = [
    //For common routes
    // { path: '', redirectTo:'/home', pathMatch: 'full'},
    { path: '', component : LandingComponent},
    { path: 'searchresults', component : SearchresultComponent},
    { path: 'login', component : LoginComponent},
    { path: 'signup', component : SignupComponent},
  
    //For student routes
    { path: 'student-dash', component : StudentDashbordComponent},

    //For mentor routes
    { path: 'mentor-dash', component : MentorDashbordComponent},

    //For admin routes
    { path: 'admin-dash', component : AdminDashbordComponent}
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
  })
  export class AppRoutingModule { }
  