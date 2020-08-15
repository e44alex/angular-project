import { fade } from './../animations';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  animations:[
    fade
  ]
})
export class CoursesComponent implements OnInit {
  // @Input()
   email: string;

  // tslint:disable-next-line: no-output-native
  @Output()
  change = new EventEmitter();

  courseName = 'Here is a course name';
  courseDesc = 'Here is a DESCRIPTION';

  courses = [
    {name: 'Angular', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'},
    {name: 'Javascript', url: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'},
    {name: 'C#', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/C_Sharp_logo.svg/932px-C_Sharp_logo.svg.png'},
    {name: 'ASP.NET', url: 'https://ih1.redbubble.net/image.938989071.8517/st,small,845x845-pad,1000x1000,f8f8f8.jpg'},
    {name: 'Blazor', url: 'https://devblogs.microsoft.com/aspnet/wp-content/uploads/sites/16/2019/04/BrandBlazor_nohalo_1000x.png'},
    {name: 'HTML+CSS', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png'},
    {name: 'Bootstrap', url: 'https://miro.medium.com/max/1024/1*9HanDsRU11ZMsgDGJwN96w.png'}
  ];


  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(): void {
    console.log(this.email);
    this.change.emit({newEmail: this.email});
  }

}
