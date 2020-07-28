import { Injectable } from '@angular/core';
import { Project } from '../projects.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  public projects: BehaviorSubject<Project[]> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
    this.projectsInit();
  }

  selectProject(index: number): Observable<Project> {
    return this.projects.pipe(
      filter((projects) => projects != null),
      map((projects) => projects[index])
    );
  }

  projectsInit(): void {
    this.http
      .get<Project[]>(
        'https://guillaumeportfolio-e2fe4.firebaseio.com/projects.json'
      )
      .subscribe((projects) => {
        this.projects.next(projects);
      });
  }
}
