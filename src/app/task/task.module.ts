import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { FocusTaskComponent } from './focus-task/focus-task.component';
import { ListTaskComponent } from './list-task/list-task.component';

const routes: Routes = [
  { path: 'project-manager/tasks', component: ListTaskComponent },
  { path: 'project-manager/task/:id', component: FocusTaskComponent },
  { path: 'project-manager/task/edit/:id', component: EditTaskComponent }
];
@NgModule({
  declarations: [ListTaskComponent, FocusTaskComponent, EditTaskComponent],
  imports: [CommonModule, RouterModule.forChild(routes),FormsModule]
})
export class TaskModule {}
