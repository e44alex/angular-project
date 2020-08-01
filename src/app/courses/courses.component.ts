import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courseName="Here is a course name";
  courseDesc="Here is a DESCRIPTION";

  courses = ["Angular", "ASP.NET", "C#", "JavaScript", "HTML+CSS"];


  constructor() { }

  ngOnInit(): void {
  }

}
