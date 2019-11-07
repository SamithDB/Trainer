import { Component, OnInit } from '@angular/core';
import {CourseService} from './course.service';
import {DataService} from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private courseService: CourseService, private DataService: DataService) { }

  ngOnInit() {
    
    try {
      //Load Courses
      if(JSON.parse(localStorage.getItem("courseslist")) == null){
        localStorage.setItem("courseslist", JSON.stringify(this.courseService.course));
      }else{
        this.courseService.course = JSON.parse(localStorage.getItem("courseslist"));
      }

      //Load Users
      if(JSON.parse(localStorage.getItem("userlist")) == null){
        localStorage.setItem("userlist", JSON.stringify(this.DataService.user));
      }else{
        this.DataService.user = JSON.parse(localStorage.getItem("userlist"));
      }
      //Load Search
      this.courseService.searchCourses = this.courseService.course;

    } catch (error) {
      console.log(error);
    }
    
  }

}
