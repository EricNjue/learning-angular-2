import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodosComponent} from '../todos/todos.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {TodosResolver} from '../todos.resolver';

const routes: Routes = [
  {path: '', redirectTo: 'todos', pathMatch: 'full'},
  {path: 'todos', component: TodosComponent, resolve: {todos: TodosResolver}, data: {title: 'Example of static route data'}},
  {path: '**', component: PageNotFoundComponent}
];

// path: string, path to match the URL
// patchMatch: string, how to match the URL
// component: class reference, component to activate when this route is activated
// redirectTo: string, URL to redirect to when this route is activated
// data: static data to assign to route
// resolve: dynamic data to resolve and merge with data when resolved
// children: child routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [TodosResolver],
  declarations: []
})
export class AppRoutingModule { }
