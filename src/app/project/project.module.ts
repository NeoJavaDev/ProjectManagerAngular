import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { FocusProjectComponent } from './focus-project/focus-project.component';
import { ListProjectComponent } from './list-project/list-project.component';

const routes: Routes = [
  { path: 'project-manager/projects', component: ListProjectComponent },
  { path: 'project-manager/project/:id', component: FocusProjectComponent },
  { path: 'project-manager/project/edit/:id', component: EditProjectComponent }
];

@NgModule({
  declarations: [
    EditProjectComponent,
    FocusProjectComponent,
    ListProjectComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ProjectModule {}
