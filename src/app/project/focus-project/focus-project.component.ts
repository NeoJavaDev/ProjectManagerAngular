import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../model/project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-focus-project',
  templateUrl: './focus-project.component.html',
  styleUrls: ['./focus-project.component.scss']
})
export class FocusProjectComponent implements OnInit {

  projects: Project[]|any;
  project: Project|any;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects;
    const projectId: string|null = this.route.snapshot.paramMap.get('id');
    if(projectId) {
      this.projectService.getProjectById(+projectId)
      .subscribe(project => this.project = project);
    }
  }
}
