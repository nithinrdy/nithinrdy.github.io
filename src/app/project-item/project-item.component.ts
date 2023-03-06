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
  sectionIsOnScreen = false;
  constructor() {}

  ngAfterViewInit(): void {}
}
