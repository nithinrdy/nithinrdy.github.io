import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements AfterViewInit {
  constructor(private navbar: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    document.documentElement.style.scrollPaddingTop =
      this.navbar.nativeElement.offsetHeight + 'px';
  }
}
