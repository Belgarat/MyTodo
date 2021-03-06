import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:  'todos', loadChildren: () => import('./features/todos/todos.module').then(m => m.TodosModule) },
  { path: '',   redirectTo: '/todos', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
