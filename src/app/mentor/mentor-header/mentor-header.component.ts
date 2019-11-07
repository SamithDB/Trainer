import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-mentor-header',
  templateUrl: './mentor-header.component.html',
  styleUrls: ['./mentor-header.component.css']
})
export class MentorHeaderComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }
  
  logout(){
    this.dataService.logout();
  }
}
