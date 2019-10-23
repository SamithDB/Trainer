import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.components';
import { SubscribeComponent } from './common/subscribe/subscribe.component';
import { CommonComponent } from './common/common.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LoginComponent } from './common/login/login.component';
import { SignupComponent } from './common/signup/signup.component';
import { LandingComponent } from './common/landing/landing.component';
import { SearchComponent } from './common/search/search.component';
import { SearchresultComponent } from './common/searchresult/searchresult.component';

const appRoutes: Routes = [
  { path: '', component : LandingComponent},
  { path: 'searchresults', component : SearchresultComponent},
  { path: 'login', component : LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SubscribeComponent,
    FooterComponent,
    HeaderComponent,
    CommonComponent,
    LoginComponent,
    SignupComponent,
    LandingComponent,
    SearchComponent,
    SearchresultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
