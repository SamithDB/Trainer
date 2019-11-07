import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../course.service';
import { User } from '../../models/user';
import { Course} from '../../models/course';

@Component({
  selector: 'app-student-dashbord',
  templateUrl: './student-dashbord.component.html',
  styleUrls: ['./student-dashbord.component.css']
})
export class StudentDashbordComponent implements OnInit {
  enrolled: Course [] =[];
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
    //
    this.enrolled = this.courseService.enrolledCourses;
  }

}
