import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/project/model/project';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent {
  public users: User[] | undefined;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  goToUser(user: User) {
    this.router.navigate(["/project-manager/user", user.id]);
  }
}
