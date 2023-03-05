import { Component } from '@angular/core';
import {
  trigger,
  style,
  animate,
  stagger,
  transition,
  query,
} from '@angular/animations';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css'],
  animations: [
    trigger('characterFade1', [
      transition('void => *', [
        query('span', [
          style({ opacity: 0, transform: 'translateY(-20%)' }),
          stagger(80, [
            animate(
              '0.5s 1s ease-out',
              style({ opacity: 1, transform: 'translateY(0)' })
            ),
          ]),
        ]),
      ]),
    ]),
    trigger('characterFade2', [
      transition('void => *', [
        query('span', [
          style({ opacity: 0, transform: 'translateY(-20%)' }),
          stagger(80, [
            animate(
              '0.5s 1.9s ease-out',
              style({ opacity: 1, transform: 'translateY(0)' })
            ),
          ]),
        ]),
      ]),
    ]),
    trigger('characterFade3', [
      transition('void => *', [
        query('span', [
          style({ opacity: 0, transform: 'translateY(-20%)' }),
          stagger(80, [
            animate(
              '0.5s 2.8s ease-out',
              style({ opacity: 1, transform: 'translateY(0)' })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class MainSectionComponent {}
