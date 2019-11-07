import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
//import { User } from './models/user';
import { Course } from './models/course';
import { Router } from '@angular/router';

@Injectable()

export class CourseService {

  allCourses: Course[] =[];
  searchCourses: Course[] =[];
  enrolledCourses: Course[] =[];

  constructor(private _http: Http, private router: Router) { }

  //Courses dummy data
  course : Course[] = [
    {
      name:'Full Stack Web Development',
      category:'Web Development',
      tech:'Java Spring , Angular JS',
      description:'This course is designed to help you master the most in-demand and critical components for becoming a good developer',
      cover:'assets/img/java_course.jpg',
      status:'A',
      uname: undefined
    },
    {
      name:'PHP Web Development',
      category:'Web Development',
      tech:'PHP , Mysql',
      description:'This course is designed to help you master the most in-demand and critical components for becoming a good developer',
      cover:'assets/img/php_course.jpg',
      status:'A',
      uname: undefined
    },
    {
      name:'UI Fundementals',
      category:'UI/UX',
      tech:'CSS, HTML, JS',
      description:'This course is designed to help you master the most in-demand and critical components for becoming a good developer',
      cover:'assets/img/ui_course.jpg',
      status:'A',
      uname: undefined
    }
  ] 

  //Dummy data for my courses
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

  //Add new Course
  saveCourses(newCourse : Course) {

    console.log(newCourse);
    try {
      if(JSON.parse(localStorage.getItem("courseslist")) == null){
        this.course.push(newCourse);
        localStorage.setItem("courseslist", JSON.stringify(this.course));
      }else{
        this.allCourses = JSON.parse(localStorage.getItem("courseslist"));
        this.allCourses.push(newCourse);
        this.course = this.allCourses;
        localStorage.setItem("courseslist", JSON.stringify(this.allCourses));
      }
    } catch (e) {
      console.error('Error in localStorage', e);
    }
  } 

  //Update Course
  updateCourses(upCourse : Course, index:number) {
      try {
        if(JSON.parse(localStorage.getItem("courseslist")) == null){
          this.course[index] = upCourse;
          localStorage.setItem("courseslist", JSON.stringify(this.course));
        }else{
          this.allCourses = JSON.parse(localStorage.getItem("courseslist"));
          this.allCourses[index] = upCourse;
          this.course[index] = (upCourse);
          localStorage.setItem("courseslist", JSON.stringify(this.allCourses));
        }
      } catch (e) {
        console.error('Update Error in localStorage', e);
      }
  } 

  //Delete Course
  deleteCourses(index:number) {
    try {
      if(JSON.parse(localStorage.getItem("courseslist")) == null){
        this.course.splice(index, 1);
        localStorage.setItem("courseslist", JSON.stringify(this.course));
      }else{
        this.allCourses = JSON.parse(localStorage.getItem("courseslist"));
        this.allCourses.splice(index, 1);
        this.course.splice(index, 1);
        localStorage.setItem("courseslist", JSON.stringify(this.allCourses));
      }
    } catch (e) {
      console.error('Update Error in localStorage', e);
      return "err";
    }
    return "deleted";
} 
  
  //Return all courses 
  Courses() {
    return JSON.parse(localStorage.getItem("courseslist"));
  }

  //Return selected courses 
  getCourse(index : number) {
    return this.course[index];
  }

  //Search courses
  searchCourse(searchCourse){
    this.searchCourses.push(searchCourse);
    console.log(this.searchCourses);
  }

  //Enrolling 
  enroll(course : string) {
    if(JSON.parse(localStorage.getItem("user")) == null){
      alert("Please loging to the system for course enrolment!");
    }else{
      this.enrolledCourses = this.course;
      alert("Course added to your course list.");
    }
  }

}
