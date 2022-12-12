import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiServerUrl}/users`);
  }

  public getUserById(userId: number): Observable<User> {
    return this.httpClient.get<User>(`${this.apiServerUrl}/users/${userId}`);
  }

  public addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.apiServerUrl}/user/add`, user);
  }

  public updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.apiServerUrl}/user/${user.id}`, user);
  }

  public deleteUserById(userId: number): Observable<void> {
    return this.httpClient.get<void>(`${this.apiServerUrl}/user/${userId}`);
  }
}
