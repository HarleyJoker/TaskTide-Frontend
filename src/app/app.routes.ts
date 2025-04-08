import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { TaskListComponent } from './components/task-list/task-list.component';

export const routes: Routes = [
  
  { path: '', component: LoginComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: 'register', component: RegisterComponent }
];
