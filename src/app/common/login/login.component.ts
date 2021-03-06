import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  
  //users: Array<any>;
  
  constructor(private _dataService: DataService ){ }

  ngOnInit() {
  }

  loginuser(event){
    event.preventDefault();
    const target = event.target;
    const uname = target.querySelector('#uname').value;
    const email = target.querySelector('#uname').value;
    const pass= target.querySelector('#pass').value;
    this._dataService.login(uname, email, pass);
  } 

}
