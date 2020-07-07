import { Injectable } from '@angular/core';
import { Project } from '../projects.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  public projects: BehaviorSubject<Project[]> = new BehaviorSubject([
    new Project(
      'Cocktail-app',
      '../../../assets/images/blog.png',
      'https://cdn.worldvectorlogo.com/logos/angular-icon.svg',
      ['Html', 'CSS/SASS', 'Javascript', 'Angular'],
      ['Webpack', 'Babel', 'Git', 'Github'],
      ['Netlify']
    ),
    new Project(
      'Blog',
      '../../../assets/images/blog.png',
      'https://cdn.worldvectorlogo.com/logos/angular-icon.svg',
      ['Html', 'CSS/SASS', 'Javascript'],
      ['Webpack', 'Babel', 'Git', 'Github'],
      ['Netlify']
    ),
    new Project(
      'travelly',
      '../../../assets/images/medium.png',
      'https://cdn.worldvectorlogo.com/logos/angular-icon.svg',
      ['Html', 'CSS/SASS', 'Javascript'],
      ['Webpack', 'Babel', 'Git', 'Github'],
      ['Netlify']
    ),
    new Project(
      'Cocktail-app',
      'https://images.unsplash.com/photo-1592320937521-84c88747a68a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
      'https://cdn.worldvectorlogo.com/logos/angular-icon.svg',
      ['Html', 'CSS/SASS', 'Javascript'],
      ['Webpack', 'Babel', 'Git', 'Github'],
      ['Netlify']
    ),
    new Project(
      'Cocktail-app',
      'https://images.unsplash.com/photo-1592320937521-84c88747a68a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
      'https://cdn.worldvectorlogo.com/logos/angular-icon.svg',
      ['Html', 'CSS/SASS', 'Javascript'],
      ['Webpack', 'Babel', 'Git', 'Github'],
      ['Netlify']
    ),
  ]);

  constructor(private http: HttpClient) {
    this.http
      .put(
        'https://guillaumeportfolio-c398d.firebaseio.com/projects.json',
        this.projects.value
      )
      .subscribe((res) => console.log(res));
  }

  public project: BehaviorSubject<Project> = new BehaviorSubject(
    this.projects.value[0]
  );

  selectProject(index: number) {
    this.project.next(this.projects.value[index]);
  }
}
