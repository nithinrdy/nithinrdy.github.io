import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = "nithinrdy's Portfolio";
  showLoader = true;

  ngAfterViewInit() {
    setTimeout(() => {
      this.showLoader = false;
    }, 5000);
  }
}
