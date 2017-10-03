import { Injectable } from '@angular/core';
import {Todo} from './todo';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TodoDataServiceService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId = 0;

  // Placeholder for todo's
  todos: Todo[] = [];

  constructor(private api: ApiService) { }

  // simulate POST /todos
  addTodo(todo: Todo): Observable<Todo> {
    // if (!todo.id) {
    //   todo.id = ++this.lastId;
    // }
    //
    // this.todos.push(todo);
    // return this;
    return this.api.createTodo(todo);
  }

  // simulate DELETE /todos/:id
  deleteTodoById(id: number): Observable<Todo> {
    return this.api.deleteTodoById(id);
  }

  // simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
  }

  // Simulate PUT /todos/:id
  updateTodo(todo: Todo): Observable<Todo> {
    return this.api.updateTodo(todo);
  }

  // simulate GET /todos/
  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  // simulate GET /todos/:id
  getTodoById(id: number): Observable<Todo> {
    // return this.todos.filter(todo => todo.id === id).pop();
    return this.api.getTodoById(id);
  }

  // toggle todo complete
  toggleTodoComplete(todo: Todo) {
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }
}
