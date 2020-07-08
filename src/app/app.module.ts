import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from './shared/layout/layout.module';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectService } from './shared/service/project.service';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { TechnoFilterPipe } from './shared/pipes/techno-filter.pipe';
import { BorderDirective } from './shared/directives/border.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    HomeComponent,
    ContactComponent,
    ProjectDetailsComponent,
    FilterPipe,
    TechnoFilterPipe,
    BorderDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    AppRoutingModule,
  ],
  entryComponents: [ProjectDetailsComponent],
  providers: [ProjectService],
  bootstrap: [AppComponent],
})
export class AppModule {}
