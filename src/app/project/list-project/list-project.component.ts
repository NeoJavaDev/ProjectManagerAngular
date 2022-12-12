import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../model/project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss']
})
export class ListProjectComponent implements OnInit {

  public projects: Project[]|undefined;
  public project: Project|undefined;

  constructor(private router: Router,private projectService: ProjectService) {}

  ngOnInit(): void {
      this.getProjects();
  }

  public getProjects(): void {
    this.projectService.getProjects().subscribe(
      (response: Project[]) => {
        this.projects = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  goToProject(project: Project) {
    this.router.navigate(["/project-manager/project", project.id]);
  }


}
