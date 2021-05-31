import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { Task5Component } from './task5/task5.component';
import { Task4Component } from './task4/task4.component';
import { Task3Component } from './task3/task3.component';
import { Task2Component } from './task2/task2.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'task1',
    component: Task1Component,
    loadChildren: () => import('./task1/task1.module').then((m) => m.Task1Module)
  },
  {
    path: 'task2',
    component: Task2Component,
    loadChildren: () => import('./task2/task2.module').then((m) => m.Task2Module)

  },
  {
    path: 'task3',
    component: Task3Component,
    loadChildren: () => import('./task3/task3.module').then((m) => m.Task3Module)

  },
  {
    path: 'task4',
    component: Task4Component,
    loadChildren: () => import('./task4/task4.module').then((m) => m.Task4Module)

  },
  {
    path: 'task5',
    component: Task5Component,
    loadChildren: () => import('./task5/task5.module').then((m) => m.Task5Module)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
