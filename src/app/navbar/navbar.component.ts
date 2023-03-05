import { Component, AfterViewInit, ElementRef } from '@angular/core';
import {
  trigger,
  state,
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
  constructor(private navbar: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    document.documentElement.style.scrollPaddingTop =
      this.navbar.nativeElement.offsetHeight + 'px';
  }
}
