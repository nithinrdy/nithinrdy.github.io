import { Component, AfterViewInit, Input } from '@angular/core';

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
    imageCaption: string;
    gitHubLink: string;
    liveLink: string | null;
  };
  sectionOpened = false;
  constructor() {}

  ngAfterViewInit(): void {}

  openSection() {
    this.sectionOpened = true;
  }

  closeSection(e: MouseEvent) {
    e.stopPropagation();
    this.sectionOpened = false;
  }
}
