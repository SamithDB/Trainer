import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const appRoutes: Routes = [
    //For common routes
    // { path: '', redirectTo:'/home', pathMatch: 'full'},
    { path: '', component : LandingComponent},
    { path: 'searchresults', component : SearchresultComponent},
    { path: 'login', component : LoginComponent},
    { path: 'signup', component : SignupComponent},
  
    //For student routes
    { path: 'student-dash', component : StudentDashbordComponent}
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
  