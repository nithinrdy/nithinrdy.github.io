import { Component, AfterViewInit, ElementRef } from '@angular/core';
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
          stagger(30, [
            animate(
              '0.3s 0.5s ease-out',
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
          stagger(30, [
            animate(
              '0.3s 1s ease-out',
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
          stagger(30, [
            animate(
              '0.3s 1.5s ease-out',
              style({ opacity: 1, transform: 'translateY(0)' })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class MainSectionComponent implements AfterViewInit {
  constructor(private mainSection: ElementRef<HTMLElement>) {}
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        console.log(entry.target, "is", entry.isIntersecting ? "visible" : "not visible");
      });
    },
    {
      root: null,
      rootMargin: '-20px',
      threshold: 0.5,
    }
  );

  ngAfterViewInit(): void {
    this.observer.observe(this.mainSection.nativeElement);
  }
}
