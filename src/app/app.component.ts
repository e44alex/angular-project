import { Component } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'my-first-app';

  email = 'e44alex@gmail.ru';

  onEmailChanged(eventArgs): void {
    console.log(eventArgs);
    this.email = eventArgs;
  }
}
