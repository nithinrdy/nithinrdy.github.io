import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { LinksBarComponent } from './links-bar/links-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectItemComponent } from './project-item/project-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainSectionComponent,
    LinksBarComponent,
    AboutMeComponent,
    ProjectsComponent,
    ProjectItemComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
