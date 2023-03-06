import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
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
          style({ opacity: 0, transform: 'translateX(100px)' }),
          stagger(300, [
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
export class AboutMeComponent implements AfterViewInit {
  @ViewChild('aboutMe') aboutMe!: ElementRef<HTMLElement>;
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
    this.observer.observe(this.aboutMe.nativeElement);
  }
}
