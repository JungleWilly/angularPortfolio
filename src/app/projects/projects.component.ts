import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/projects.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { ProjectService } from '../shared/service/project.service';

import { fade } from '../shared/animations/fade';

import {
  query,
  transition,
  trigger,
  style,
  stagger,
  animate,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    fade,
    trigger('listAnimations', [
      transition('* => *', [
        query(':enter', style({ opacity: '0' }), { optional: true }),
        query(
          ':enter',
          stagger('300ms', [
            animate(
              '1s 1.2s ease-in',
              keyframes([
                style({
                  opacity: 0,
                  transform: 'translateY(-75px)',
                  offset: 0,
                }),
                style({
                  opacity: 0.5,
                  transform: 'translateY(35px)',
                  offset: 0.3,
                }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
              ])
            ),
          ])
        ),
      ]),
    ]),
  ],
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  activeProject: number;
  search: string = '';
  color: string;

  constructor(
    public dialog: MatDialog,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.projectService.projects.subscribe((projects: Project[]) => {
      this.projects = projects;
    });
  }

  openDialog(index) {
    const dialogRef: MatDialogRef<ProjectDetailsComponent> = this.dialog.open(
      ProjectDetailsComponent,
      {
        height: 'calc(100% - 30px)',
        width: 'calc(100% - 30px)',
        maxWidth: '100%',
        maxHeight: '100%',
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    this.activeProject = index;
    this.projectService.selectProject(index);
  }
}
