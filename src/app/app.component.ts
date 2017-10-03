import {Component, OnInit} from '@angular/core';
import {TodoDataServiceService} from './todo-data-service.service';
import {Todo} from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataServiceService]
})
export class AppComponent implements OnInit {
  title = 'app';

  newTodo: Todo = new Todo();
  todos: Todo[] = [];

  constructor(private todoDataService: TodoDataServiceService) {

  }

  ngOnInit() {
    this.todoDataService.getAllTodos()
      .subscribe((todos) => {
      this.todos = todos;
      });
  }

  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo)
      .subscribe((newTodo) => {
        this.todos = this.todos.concat(newTodo);
      });
  }

  onToggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo)
      .subscribe((updatedTodo) => {
        todo = updatedTodo;
      });
  }

  onRemoveTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id)
      .subscribe((_) => {
        this.todos = this.todos.filter((t) => t.id !== todo.id);
      });
  }

  // get todos() {
  //   return this.todoDataService.getAllTodos();
  // }
}
