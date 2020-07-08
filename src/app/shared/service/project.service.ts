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
      'Blog',
      '../../../assets/images/blog.png',
      ['Html', 'CSS/SASS', 'Javascript', 'Angular'],
      ['Webpack', 'Babel', 'Git', 'Github'],
      ['Netlify']
    ),
    new Project(
      'Le Journal du Lundi',
      '../../../assets/images/medium.png',
      ['Html', 'CSS/SASS', 'Javascript'],
      ['Webpack', 'Babel', 'Git', 'Github'],
      ['Netlify']
    ),
    new Project(
      'Travelly',
      '../../../assets/images/Travelly.jpg',
      ['Html', 'CSS/SASS'],
      ['Webpack', 'Babel', 'Git', 'Github'],
      ['Netlify']
    ),
    new Project(
      'Agence Ledor',
      '../../../assets/images/ledor.jpg',
      ['Html', 'CSS/SASS'],
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
