import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import {
  trigger,
  style,
  animate,
  stagger,
  transition,
  query,
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('navbarFade', [
      transition('void => *', [
        query('a', [
          style({ opacity: 0, transform: 'translateY(20%)' }),
          stagger(400, [
            animate(
              '0.5s 1.5s ease-out',
              style({ opacity: 1, transform: 'translateY(0)' })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('navbar') navbar!: ElementRef<HTMLElement>;
  previousScrollPosition = 0;
  hideNav = false;
  constructor() {}

  ngAfterViewInit() {
    document.documentElement.style.scrollPaddingTop =
      this.navbar.nativeElement.offsetHeight + 'px';
    document.onscroll = () => {
      if (window.scrollY > this.previousScrollPosition) {
        this.hideNav = true;
        this.previousScrollPosition = window.scrollY;
      } else {
        this.hideNav = false;
        this.previousScrollPosition = window.scrollY;
      }
    };
  }
}
