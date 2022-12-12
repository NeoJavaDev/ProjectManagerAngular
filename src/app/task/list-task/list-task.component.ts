import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../model/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent {

  public tasks: Task[] | undefined;

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
      this.getTasks();
  }

  public getTasks(): void {
    this.taskService.getTasks().subscribe(
      (response: Task[]) => {
        this.tasks = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  goToTask(task: Task) {
    this.router.navigate(["/project-manager/task", task.id]);
  }

}
