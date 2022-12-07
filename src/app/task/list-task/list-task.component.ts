import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Task } from '../model/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent {

  public tasks: Task[] | undefined;

  constructor(private taskService: TaskService) {}

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

}
