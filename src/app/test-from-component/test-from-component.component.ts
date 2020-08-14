import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-from-component',
  templateUrl: './test-from-component.component.html',
  styleUrls: ['./test-from-component.component.css']
})
export class TestFromComponentComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;

  constructor() { }

  ngOnInit(): void {
  }

}
