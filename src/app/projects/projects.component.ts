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
    {
      title: 'Portfolio v1',
      description:
        'My first portfolio, built using HTML, CSS and JavaScript. It was a great learning experience, and I still use it as a reference for some of my projects.',
      image: '',
      gitHubLink: 'abc',
      liveLink: 'https://nithinrdy.github.io/portfolio-v1/',
    },
  ];

  constructor() {}

  ngAfterViewInit() {}
}
