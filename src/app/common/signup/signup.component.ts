import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  //users: Array<any>;

  constructor(private _dataService: DataService) {}

  ngOnInit() {}

  signupuser(event){
    event.preventDefault()
    const target = event.target;
    const fname = target.querySelector('#fname').value;
    const lname = target.querySelector('#lname').value;
    const uname = target.querySelector('#uname').value;
    const email = target.querySelector('#email').value;
    const pass= target.querySelector('#pass').value;
    const cpass = target.querySelector('#cpass').value;
   
    if(pass == cpass){
      //Create a new user
      this._dataService.saveUser(fname, lname, uname, email, pass);
    }
  }

}
