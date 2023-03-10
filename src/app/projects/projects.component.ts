import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('cardsFadeIn', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-60px)' }),
          stagger(200, animate('700ms ease-out')),
        ]),
      ]),
    ]),
  ],
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChild('projects') projects!: ElementRef<HTMLElement>;
  sectionIsOnScreen = false;
  projectsList = [
    {
      title: 'This Portfolio!',
      description:
        'The only place where form takes priority over function (probably because form IS the function, idk :P).',
      tech: "Built using Angular2+, Angular's animations module and TailwindCSS.",
      image: 'assets/portfolio_main.png',
      imageCaption: 'The topmost section of the page.',
      gitHubLink: 'https://github.com/nithinrdy/nithinrdy.github.io',
      liveLink: 'https://nithinrdy.github.io',
    },
    {
      title: 'Connect',
      description:
        'A real-time 1:1 video chat application, featuring basic user authentication.',
      tech: 'Built using the native WebRTC API (no third-party libraries/abstractions), Socket.IO, ReactJS, Framer-Motion, TailwindCSS, ExpressJS, Supabase and TypeScript. Authentication built using JWTs.',
      image: 'assets/connect_main.png',
      imageCaption: "Connect's dashboard page.",
      gitHubLink:
        'https://gist.github.com/nithinrdy/aff0d2183128172c042ec9fe4240ba78',
      liveLink: 'https://4.213.88.24.nip.io/',
    },
    {
      title: 'Quick-lend',
      description:
        'An app designed to allow users to post requests for daily utilites to swiftly borrow/lend products within small communities (not the most revolutionary idea -- just me polishing my full-stack skills).',
      tech: 'Built using ReactJS, TailwindCSS, Framer-Motion, ExpressJS, MongoDB/Mongoose and TypeScript.',
      image: 'assets/quick_main.png',
      imageCaption: "Quick-lend's landing page.",
      gitHubLink:
        'https://gist.github.com/nithinrdy/5ee01db6a4d4a2ab6f6bb7b83c92bf60',
      liveLink: 'https://3.86.13.21.nip.io/',
    },
    {
      title: 'GSoC 2022 project',
      description:
        "<b>Celebrating learners' accomplishments</b>.<br />The project I worked on as part of Google Summer of Code 2022 -- involved adding and revamping several components to/of Oppia.org, meant to celebrate learners' accomplishments and provide further learning recommendations. Link contains further details.",
      tech: 'Built using Angular2+, Jasmine, TypeScript, WebDriverIO, Python & Figma.',
      image: 'assets/end_chapter.png',
      imageCaption:
        'The revamped end chapter screen, a small part of the 150 hour-long project.',
      gitHubLink: null,
      liveLink:
        'https://summerofcode.withgoogle.com/archive/2022/projects/5XM0ONH7',
    },
  ];

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

  ngAfterViewInit() {
    this.observer.observe(this.projects.nativeElement);
  }
}
