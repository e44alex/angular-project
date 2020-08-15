import { fade } from './../animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-from-component',
  templateUrl: './test-from-component.component.html',
  styleUrls: ['./test-from-component.component.css'],
  animations: [
    fade
  ]
})
export class TestFromComponentComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  log(x): void {
    console.log(x);
  }

  OnSubmit(form): void {
    if (!form.valid) {
      alert('form is not valid');
    }
    else{
      console.log(form.value);
    }
  }

}
