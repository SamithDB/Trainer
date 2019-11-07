import { Component, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import {CourseService} from '../../course.service';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { match } from 'minimatch';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  allcourses:Course[] =[];
  //@Output()
  //emitter:EventEmitter = new EventEmitter<string> (); // To Develop - Better approch 

  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit() {
  }

  //Search Courses
  searchcourse(form: NgForm){
    console.log(form.value);
    const word = form.value.word;
    console.log("searching - "+ word);
    //const filtered: Course[] = this.allcourses.filter( c => this.matchStr( c, word) ) // To Develop - Better approch 
    console.log("Searching"); 
    this.courseService.searchCourses = [];
    this.allcourses = this.courseService.course;
    for(var counter:number = 0; counter<this.allcourses.length; counter++){
      var str1 = this.allcourses[counter].name.search(word);
      var str2 = this.allcourses[counter].tech.search(word);
      if(str1 != -1 || str2 != -1){
        this.courseService.searchCourse(this.allcourses[counter]);
        console.log(this.allcourses[counter].name);
      }
    }
    this.router.navigate(["searchresults"]);
  
  }
  
}
