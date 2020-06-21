import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/projects.model';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailsComponent } from '../project-details/project-details.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public projects: Project[] = [
    new Project(
      'Cocktail-app',
      'https://images.unsplash.com/photo-1592320937521-84c88747a68a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
      'https://cdn.worldvectorlogo.com/logos/angular-icon.svg'
    ),
    new Project(
      'Blog',
      'https://images.unsplash.com/photo-1592277320579-6826efd42e67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=629&q=80',
      'https://cdn.worldvectorlogo.com/logos/angular-icon.svg'
    ),
    new Project(
      'travelly',
      'https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
      'https://cdn.worldvectorlogo.com/logos/angular-icon.svg'
    ),
    new Project(
      'Cocktail-app',
      'https://images.unsplash.com/photo-1592320937521-84c88747a68a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
      'https://cdn.worldvectorlogo.com/logos/angular-icon.svg'
    ),
    new Project(
      'Cocktail-app',
      'https://images.unsplash.com/photo-1592320937521-84c88747a68a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
      'https://cdn.worldvectorlogo.com/logos/angular-icon.svg'
    ),
  ];

  constructor(public dialog: MatDialog) {}

  openDialog(index) {
    const dialogRef = this.dialog.open(ProjectDetailsComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {}
}
