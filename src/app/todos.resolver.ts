import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Todo} from './todo';
import {TodoDataServiceService} from './todo-data-service.service';
import {Injectable} from '@angular/core';

@Injectable()
export class TodosResolver implements Resolve<Observable<Todo[]>> {

  constructor(private todoDataService: TodoDataServiceService) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todo[]> {
        return this.todoDataService.getAllTodos();
  }
}
