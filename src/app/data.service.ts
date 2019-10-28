import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()


export class DataService {

  user = [{"name":"John"},{"name":"Jane"}] 

  constructor(private _http: Http) { }

  getUsers() {

    return this.user;

  }

  saveUser(fname, lname, uname, email, pass) {

    console.log(fname, lname, uname, email, pass);
    
  }

  

}
