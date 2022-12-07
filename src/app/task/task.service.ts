import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { Task } from './model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) {}

  public getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.apiServerUrl}/tasks`);
  }

  public getTaskById(taskId: number): Observable<Task> {
    return this.httpClient.get<Task>(`${this.apiServerUrl}/task/${taskId}`);
  }

  public addTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(`${this.apiServerUrl}/task/add`, task);
  }

  public updateTaskById(task: Task): Observable<Task> {
    return this.httpClient.put<Task>(`${this.apiServerUrl}/task`, task);
  }

  public deleteTaskById(taskId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiServerUrl}/task/${taskId}`);
  }

}
