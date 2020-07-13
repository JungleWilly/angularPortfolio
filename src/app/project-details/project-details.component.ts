import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/service/project.service';
import { Project } from '../shared/projects.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  project: Project;
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {}
}
