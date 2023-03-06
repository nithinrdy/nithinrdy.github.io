import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChild('projectItemContainer')
  projectItemContainer!: ElementRef<HTMLElement>;
  projectsList = [
    {
      title: 'This Portfolio!',
      description:
        "Probably the only place where form takes a priority over function (because form IS the function :P). Built using Angular, Angular's animations module and TailwindCSS.",
      image: 'assets/portfolio_main.png',
      gitHubLink: 'https://github.com/nithinrdy/portfolio',
      liveLink: null,
    },
  ];

  constructor() {}

  ngAfterViewInit() {}
}
