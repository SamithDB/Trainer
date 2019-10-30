import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../course.service';
//import { from } from 'rxjs';

@Component({
  selector: 'app-student-dashbord',
  templateUrl: './student-dashbord.component.html',
  styleUrls: ['./student-dashbord.component.css'],
  providers: [CourseService]
})
export class StudentDashbordComponent implements OnInit {
  courses: { name:string, category:string, tech:string, description:string, status:string, cover:string, uname:string }[] =[];
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courses = this.courseService.myCourse;
  }

}
