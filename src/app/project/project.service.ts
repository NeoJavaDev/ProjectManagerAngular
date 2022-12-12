import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { Project } from './model/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) {}

  public getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`${this.apiServerUrl}/projects`);
  }

  public getProjectById(projectId: number): Observable<Project> {
    return this.httpClient.get<Project>(
      `${this.apiServerUrl}/projects/${projectId}`
    );
  }

  public addProject(project: Project): Observable<Project> {
    return this.httpClient.post<Project>(
      `${this.apiServerUrl}/project/add`,
      project
    );
  }

  public updateProject(project: Project): Observable<Project> {
    return this.httpClient.put<Project>(
      `${this.apiServerUrl}/project/${project.id}`,
      project
    );
  }

  public deleteProjectById(projectId: number): Observable<void> {
    return this.httpClient.get<void>(
      `${this.apiServerUrl}/project/${projectId}`
    );
  }
}
