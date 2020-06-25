import { Injectable } from '@angular/core';
import { Project } from '../projects.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  public projects: BehaviorSubject<Project[]> = new BehaviorSubject([
    new Project(
      'Cocktail-app',
      'https://images.unsplash.com/photo-1592320937521-84c88747a68a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
      'https://cdn.worldvectorlogo.com/logos/angular-icon.svg',
      ['Html', 'CSS/SASS', 'Javascript'],
      ['Webpack', 'Babel', 'Git', 'Github'],
      ['netlify']
    ),
    new Project(
      'Blog',
      'https://images.unsplash.com/photo-1592277320579-6826efd42e67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=629&q=80',
      'https://cdn.worldvectorlogo.com/logos/angular-icon.svg',
      ['Html', 'CSS/SASS', 'Javascript'],
      ['Webpack', 'Babel', 'Git', 'Github'],
      ['netlify']
    ),
    new Project(
      'travelly',
      'https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
      'https://cdn.worldvectorlogo.com/logos/angular-icon.svg',
      ['Html', 'CSS/SASS', 'Javascript'],
      ['Webpack', 'Babel', 'Git', 'Github'],
      ['netlify']
    ),
    new Project(
      'Cocktail-app',
      'https://images.unsplash.com/photo-1592320937521-84c88747a68a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
      'https://cdn.worldvectorlogo.com/logos/angular-icon.svg',
      ['Html', 'CSS/SASS', 'Javascript'],
      ['Webpack', 'Babel', 'Git', 'Github'],
      ['netlify']
    ),
    new Project(
      'Cocktail-app',
      'https://images.unsplash.com/photo-1592320937521-84c88747a68a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
      'https://cdn.worldvectorlogo.com/logos/angular-icon.svg',
      ['Html', 'CSS/SASS', 'Javascript'],
      ['Webpack', 'Babel', 'Git', 'Github'],
      ['netlify']
    ),
  ]);

  public project: BehaviorSubject<Project> = new BehaviorSubject(
    this.projects.value[0]
  );

  selectProject(index: number) {
    this.project.next(this.projects.value[index]);
  }

  constructor() {}
}
