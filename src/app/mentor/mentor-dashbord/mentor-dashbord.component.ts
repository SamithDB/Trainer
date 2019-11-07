import { Component, OnInit, ViewChild } from '@angular/core';
import { Course } from '../../models/course';
import { User } from '../../models/user';
import {CourseService} from '../../course.service';
import { NgForm } from '@angular/forms';

var selectedCourse = new Course();

@Component({
  selector: 'app-mentor-dashbord',
  templateUrl: './mentor-dashbord.component.html',
  styleUrls: ['./mentor-dashbord.component.css']
})
export class MentorDashbordComponent implements OnInit {
  @ViewChild('u', { static: false, }) updateForm: NgForm;
  @ViewChild('d', { static: false, }) deleteForm: NgForm;
  
  courses: Course[] =[];
  select : boolean = false;
  selectingName : string = "";
  currenctUser : User;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    //Load Current User
    try {
      this.currenctUser = JSON.parse(localStorage.getItem("user"))
      console.log(this.currenctUser);
    } catch (error) {
      console.log(error);
    }
    //Load Courses
    this.courses = this.courseService.course;
  }

  onSelect(index :number){
    selectedCourse = this.courseService.getCourse(index);
    this.select = true;
    this.selectingName = selectedCourse.name;

    this.updateForm.setValue({
      index: index,
      name: selectedCourse.name,
      category: selectedCourse.category,
      tech: selectedCourse.tech,
      description: selectedCourse.description
    })
    this.deleteForm.setValue({
      index: index
    })
  }

  addCourse(form: NgForm){
    console.log(form.value);
    const value = form.value;
    var newCourse = new Course();
    newCourse.name = value.name;
    newCourse.category = value.category;
    newCourse.tech = value.tech;
    newCourse.description = value.description;
    newCourse.cover = "assets/img/cover.jpg";
    this.courseService.saveCourses(newCourse);
    this.courses = this.courseService.course;
  }

  updateCourse(form: NgForm){
    console.log(form.value);
    const value = form.value;
    var upCourse = new Course();
    upCourse.name = value.name;
    upCourse.category = value.category;
    upCourse.tech = value.tech;
    upCourse.description = value.description;
    upCourse.cover = "assets/img/cover.jpg";
    this.courseService.updateCourses(upCourse, value.index);
    this.courses = this.courseService.course;
  }

  deleteCourse(form: NgForm){
    const value = form.value;
    var msg:string = "";
    msg =this.courseService.deleteCourses(value.index);
    if (msg == "deleted") {
      alert("Successfully deleted the course!");
    } else {
      alert("Can not delete the selected course!");
    }
    this.courses = this.courseService.course;
    
  }

}
