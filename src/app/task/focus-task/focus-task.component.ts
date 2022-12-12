import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../model/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-focus-task',
  templateUrl: './focus-task.component.html',
  styleUrls: ['./focus-task.component.scss']
})
export class FocusTaskComponent implements OnInit {

  tasks: Task[]|any;
  task: Task|any;

  constructor(private route: ActivatedRoute, private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks;
    const taskId: string|null = this.route.snapshot.paramMap.get('id');
    if(taskId) {
      this.taskService.getTaskById(+taskId)
      .subscribe(task => this.task = task);
    }
  }

}
