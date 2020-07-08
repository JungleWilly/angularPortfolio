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
      'Cocktail App',
      '../../../assets/images/Cocktails.png',
      ['HTML', 'CSS SASS', 'Javascript', 'Typescript'],
      ['Webpack', 'Babel', 'Git', 'Github', 'Firebase'],
      ['Netlify'],
      'https://objective-mestorf-722e97.netlify.app/cocktails',
      'https://github.com/JungleWilly/Cocktails/tree/master/cocktailProjet',
      ['Angular']
    ),
    new Project(
      'Blog',
      '../../../assets/images/blog.png',
      ['HTML', 'CSS SASS', 'Javascript'],
      ['Webpack', 'Babel', 'Git', 'Github'],
      ['Netlify'],
      'https://keen-jackson-949f2e.netlify.app/',
      'https://github.com/JungleWilly/Blog_VanillaJS_Project'
    ),
    new Project(
      'Le Journal du Lundi',
      '../../../assets/images/medium.png',
      ['HTML', 'CSS SASS'],
      ['Webpack', 'Babel', 'Git', 'Github'],
      ['Netlify'],
      'https://practical-nobel-5da99a.netlify.app/',
      'https://github.com/JungleWilly/Medium_Home_Project'
    ),
    new Project(
      'Agence Ledor',
      '../../../assets/images/ledor.jpg',
      ['HTML', 'CSS SASS'],
      ['Webpack', 'Babel', 'Git', 'Github'],
      ['Netlify'],
      'https://cocky-goldwasser-746b8c.netlify.app/',
      'https://github.com/JungleWilly/Ledor_Agency_Project',
      ['Angular']
    ),
    new Project(
      'Travelly',
      '../../../assets/images/Travelly.jpg',
      ['HTML', 'CSS SASS'],
      ['Webpack', 'Babel', 'Git', 'Github'],
      ['Netlify'],
      'https://stupefied-hypatia-24fdf7.netlify.app/',
      'https://github.com/JungleWilly/Travelly_Project'
    ),
    new Project(
      'Cafe Florette',
      '../../../assets/images/Cafe.jpg',
      ['HTML', 'CSS'],
      ['Webpack', 'Babel', 'Git', 'Github'],
      ['Netlify'],
      'https://xenodochial-mayer-15e63a.netlify.app/index.html',
      'https://github.com/JungleWilly/Cafe_Florette_Project'
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
