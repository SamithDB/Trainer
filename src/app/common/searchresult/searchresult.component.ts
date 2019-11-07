import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../course.service';
import { Course } from '../../models/course';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})

export class SearchresultComponent implements OnInit {
  searchCourses: { name:string, category:string, tech:string, description:string, status:string, cover:string}[] =[];
 
  constructor(private courseService: CourseService
      
    ) { }
  
  ngOnInit() {
    if(this.courseService.searchCourses.length == 0){
      console.log("oninit");
      this.searchCourses = this.courseService.Courses();
    }else{
      console.log("----***");
      this.searchCourses = this.courseService.searchCourses;
      console.log(this.courseService.searchCourses);
    }
  }
  
  enroll(event){
    event.preventDefault()
    const target = event.target;
    var enrolled = target.querySelector('#course').value;
    console.log(enrolled);
    this.courseService.enroll(enrolled);
  }

}
