import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css'],
})
export class ProjectItemComponent implements AfterViewInit {
  @Input() projectItem!: {
    title: string;
    description: string;
    image: string;
    gitHubLink: string;
    liveLink: string | null;
  };
  @ViewChild('projectItemElement') projectItemElement!: ElementRef<HTMLElement>;
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
    this.observer.observe(this.projectItemElement.nativeElement);
  }
}
