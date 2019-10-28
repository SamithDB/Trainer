import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';

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
    StudentHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
