import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectService } from './shared/service/project.service';
import { FilterPipe } from './shared/pipes/filter.pipe';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
  ],
  entryComponents: [ProjectDetailsComponent],
  providers: [ProjectService],
  bootstrap: [AppComponent],
})
export class AppModule {}
