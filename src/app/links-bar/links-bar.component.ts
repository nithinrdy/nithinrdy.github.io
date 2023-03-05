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
  selector: 'app-links-bar',
  templateUrl: './links-bar.component.html',
  styleUrls: ['./links-bar.component.css'],
  animations: [
    trigger('barFade', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(-100%)' }),
        animate(
          '1.5s 3s cubic-bezier(0.001, 0.001, 0, 1)',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class LinksBarComponent {
  constructor() {}
}
