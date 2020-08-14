import { CoursesComponent } from './courses/courses.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';

  email = 'e44alex@gmail.ru';

  onEmailChanged(eventArgs): void {
    console.log(eventArgs);
    this.email = eventArgs;
  }
}
