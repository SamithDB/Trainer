import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../course.service';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css'],
  providers: [CourseService]
})
export class SearchresultComponent implements OnInit {
  searchCourses: { name:string, category:string, tech:string, description:string, status:string, cover:string, uname:string }[] =[];
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.searchCourses = this.courseService.myCourse;
  }

}
