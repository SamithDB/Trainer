import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  defaultUser : User = {
      fname:'Default',
      lname:'Default',
      uname:'Default',
      email:'Default',
      password:'Default',
      type:'user',
      status:'A'
    };
  currenctUser : User = this.defaultUser;

  constructor() { }

  ngOnInit() {
    try {
      if(JSON.parse(localStorage.getItem("user")) == null){
      }else{
        this.currenctUser = JSON.parse(localStorage.getItem("user"));
      }
    } catch (error) {
      console.log(error);
    }
  }

}
