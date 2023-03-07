import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements AfterViewInit {
  projectsList = [
    {
      title: 'This Portfolio!',
      description:
        "Probably the only place where form takes a priority over function (because form IS the function :P). Built using Angular, Angular's animations module and TailwindCSS.",
      image: 'assets/portfolio_main.png',
      imageCaption: 'The topmost section of page',
      gitHubLink: 'https://github.com/nithinrdy/portfolio',
      liveLink: null,
    },
    {
      title: 'Somethin',
      description: 'Somethin else',
      image: '',
      imageCaption: '',
      gitHubLink: 'abc',
      liveLink: 'some-stuff',
    },
    {
      title: 'Somethin2',
      description: 'Somethin else2',
      image: '',
      imageCaption: '',
      gitHubLink: 'abc2',
      liveLink: 'some-stuff2',
    },
    {
      title: 'Somethin3',
      description: 'Somethin else3',
      image: '',
      imageCaption: '',
      gitHubLink: 'abc3',
      liveLink: 'some-stuff3',
    },
  ];

  constructor() {}

  ngAfterViewInit() {}
}
