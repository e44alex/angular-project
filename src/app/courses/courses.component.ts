import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  // @Input()
   email: string;

  // tslint:disable-next-line: no-output-native
  @Output()
  change = new EventEmitter();

  courseName = 'Here is a course name';
  courseDesc = 'Here is a DESCRIPTION';

  courses = ['Angular', 'ASP.NET', 'C#', 'JavaScript', 'HTML+CSS'];


  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(): void {
    console.log(this.email);
    this.change.emit({newEmail: this.email});
  }

}
