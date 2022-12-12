import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { RouterModule, Routes } from '@angular/router';
import { FocusUserComponent } from './focus-user/focus-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'project-manager/users', component: ListUserComponent },
  { path: 'project-manager/user/:id', component: FocusUserComponent },
  { path: 'project-manager/user/edit/:id', component: EditUserComponent }
];
@NgModule({
  declarations: [
    ListUserComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes),FormsModule
  ]
})
export class UserModule { }
