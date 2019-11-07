import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-student-header',
  templateUrl: './student-header.component.html',
  styleUrls: ['./student-header.component.css']
})
export class StudentHeaderComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  logout(){
    this.dataService.logout();
  }

}
