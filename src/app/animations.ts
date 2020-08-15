import { state, trigger, style, transition, animate } from '@angular/animations';
export let fade = trigger('fade', [
  state('void', style({opacity: 0})),

  transition(':enter', [
    style({ opacity: 0 }),
    animate(1000)
  ])
]);
