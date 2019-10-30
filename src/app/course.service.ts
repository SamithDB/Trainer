import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
//import { User } from './models/user';
import { Course } from './models/course';
import { Router } from '@angular/router';
var course_new = new Course();
var myCourse_new = new Course();

@Injectable()

export class CourseService {

  constructor(private _http: Http, private router: Router) { }

  course = [
    {
      name:'Full Stack Web Development',
      category:'Web Development',
      tech:'Java Spring , Angular JS',
      description:'This course is designed to help you master the most in-demand and critical components for becoming a good developer',
      cover:'assets/img/java_course.jpg',
      status:'A'
    },
    {
      name:'PHP Web Development',
      category:'Web Development',
      tech:'PHP , Mysql',
      description:'This course is designed to help you master the most in-demand and critical components for becoming a good developer',
      cover:'assets/img/php_course.jpg',
      status:'A'
    },
    {
      name:'UI Fundementals',
      category:'UI/UX',
      tech:'CSS, HTML, JS',
      description:'This course is designed to help you master the most in-demand and critical components for becoming a good developer',
      cover:'assets/img/ui_course.jpg',
      status:'A'
    }
  ] 

  myCourse = [
    {
      name:'Full Stack Web Development',
      category:'Web Development',
      tech:'Java Spring , Angular JS',
      description:'This course is designed to help you master the most in-demand and critical components for becoming a good developer',
      status:'A',
      cover:'assets/img/java_course.jpg',
      uname:'sam1'
    },
    {
      name:'PHP Web Development',
      category:'Web Development',
      tech:'PHP , Mysql',
      description:'This course is designed to help you master the most in-demand and critical components for becoming a good developer',
      status:'A',
      cover:'assets/img/php_course.jpg',
      uname:'sam1'
    },
    {
      name:'UI Fundementals',
      category:'UI/UX',
      tech:'CSS, HTML, JS',
      description:'This course is designed to help you master the most in-demand and critical components for becoming a good developer',
      status:'A',
      cover:'assets/img/ui_course.jpg',
      uname:'sam1'
    }
  ]

  getMyCourses() {

    return this.myCourse;

  }


}
