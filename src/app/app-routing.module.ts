import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { animation: 'ProjectsPage' },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'AboutPage' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'ContactPage' },
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
