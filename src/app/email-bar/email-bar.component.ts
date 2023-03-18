import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-email-bar',
  templateUrl: './email-bar.component.html',
  styleUrls: ['./email-bar.component.css'],
  animations: [
    trigger('barFade', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate(
          '1.5s 3s cubic-bezier(0.001, 0.001, 0, 1)',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class EmailBarComponent {}
