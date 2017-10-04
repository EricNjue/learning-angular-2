import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';
import {TodoDataServiceService} from '../todo-data-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodoDataServiceService]
})
export class TodosComponent implements OnInit {

  newTodo: Todo = new Todo();
  todos: Todo[] = [];

  constructor(private todoDataService: TodoDataServiceService, private route: ActivatedRoute) {

  }


  ngOnInit() {
    // this.todoDataService.getAllTodos()
    //   .subscribe((todos) => {
    //     this.todos = todos;
    //   });
    this.route.data.map((data) => data['todos'])
      .subscribe(
        (todos) => {
          this.todos = todos;
        }
      );
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
