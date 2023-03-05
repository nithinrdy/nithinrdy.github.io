import { Component } from '@angular/core';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  animations: [
    trigger('aboutMeFade', [
      transition('void => *', [
        query('p', [
          style({ opacity: 0, transform: 'translateY(70px)' }),
          stagger(200, [
            animate(
              '0.5s ease-in',
              style({ opacity: 1, transform: 'translateY(0)' })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class AboutMeComponent {}
