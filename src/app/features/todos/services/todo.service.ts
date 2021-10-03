import { Injectable } from '@angular/core';
import {TodoModel} from "../state/models";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

// the http headers are manage in interceptor

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  loadTodos(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>(`${this.apiUrl}/todos`);
  }

}
