import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css'],
  animations: [
    trigger('creditsFade', [
      transition('void => *', [
        query('p', [
          style({ opacity: 0, transform: 'translateX(-100px)' }),
          stagger(700, [
            animate(
              '0.5s ease-out',
              style({ opacity: 1, transform: 'translateX(0)' })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class CreditsComponent implements AfterViewInit {
  @ViewChild('credits') credits!: ElementRef<HTMLElement>;
  sectionIsOnScreen = false;
  constructor() {}

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.sectionIsOnScreen = true;
        }
      });
    },
    {
      root: null,
      rootMargin: '-20px',
      threshold: 0.5,
    }
  );

  ngAfterViewInit(): void {
    this.observer.observe(this.credits.nativeElement);
  }
}
