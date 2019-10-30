import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { User } from './models/user';
import { Router } from '@angular/router';
var user_new = new User();

@Injectable()

export class DataService {

  constructor(private _http: Http, private router: Router) { }

  user = [
    {
      fname:'Samith',
      lname:'Basnayaka',
      uname:'sam1',
      email:'sam1@gmail.com',
      password:'123',
      type:'user',
      status:'A'
    },
    {
      fname:'Samith',
      lname:'Basnayaka',
      uname:'sam2',
      email:'sam2@gmail.com',
      password:'123',
      type:'mentor',
      status:'A'
    },
    {
      fname:'Samith',
      lname:'Basnayaka',
      uname:'sam3',
      email:'sam3@gmail.com',
      password:'123',
      type:'admin',
      status:'A'
    }] 

  getUsers() {

    return this.user;

  }

  saveUser(fname: string, lname: string, uname: string, email: string, pass: string) {
    user_new.fname =fname;
    user_new.lname =lname;
    user_new.uname =uname;
    user_new.email =email;
    user_new.password =pass;
    user_new.type ='user';
    user_new.status ='A';
    this.user.push(user_new);
    console.log(this.user);
    
  }

  login(uname, email, pass) {
    var status = "null";
    for(var counter:number = 0; counter<this.user.length; counter++){
      if(this.user[counter].uname == uname || this.user[counter].email == email){
        if(this.user[counter].password == pass) {
          console.log(this.user[counter]);
          if(this.user[counter].type == 'admin'){
            this.router.navigate(["admin-dash"]);
          }else if(this.user[counter].type == 'mentor'){
            this.router.navigate(["mentor-dash"]);
          }else{
            this.router.navigate(["student-dash"])  ;
          }
        }else{
          //password incorect.
        }
      }
      //User not found.
    }
    
  }

}
