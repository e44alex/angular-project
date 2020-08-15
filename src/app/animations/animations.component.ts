import { fade } from './../animations';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    fade
  ]
})
export class AnimationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
