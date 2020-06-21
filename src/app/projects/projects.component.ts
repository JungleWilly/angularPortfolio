import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/projects.model';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { ProjectService } from '../shared/service/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  activeProject: number;

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
    const dialogRef = this.dialog.open(ProjectDetailsComponent, {
      height: 'calc(100% - 30px)',
      width: 'calc(100% - 30px)',
      maxWidth: '100%',
      maxHeight: '100%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    this.activeProject = index;
    this.projectService.selectProject(index);
  }
}
