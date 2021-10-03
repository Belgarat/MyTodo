import { Component, OnInit } from '@angular/core';
import {TodoModel} from "./state/models";

@Component({
  selector: 'mbr-todos',
  template: `
    <div class="content-section implementation">
      <p-card>
        <p-orderList
          [value]="todos"
          [listStyle]="{'max-height':'30rem'}"
          [(selection)]="selectedTodos"
          header="List of todos"
          filterBy="todo"
          filterPlaceholder="Filter by todo description"
          [dragdrop]="true"
        >
          <ng-template let-todo pTemplate="item">
            <div class="todo-item flex justify-content-between">
              <div class="todo-list-detail">
                <i class="pi pi-briefcase todo-icon"></i>
                <span class="todo-category">{{todo.todo}}</span>
              </div>
              <div class="todo-list-action">
                <i [title]="todo.checked ? 'Task complete' : 'Task to do'" class="pi" [ngClass]="{'pi-check-circle': todo.checked, 'pi-circle-off': !todo.checked}"></i>
              </div>
            </div>
          </ng-template>
        </p-orderList>
        <ng-template pTemplate="footer">
          <i class="pi pi-check-circle"></i>: Task complete
            |
          <i class="pi pi-circle-off"></i>: Task to do
        </ng-template>
      </p-card>
      <mbr-debug-info *isProduction [debugItem]="selectedTodos"></mbr-debug-info>
    </div>
  `,
  styles: [`
    .todo-item
        .todo-list-detail
            .todo-icon {
                color: green;
                font-size: 1.2em;
            }

        .todo-category {
            margin-left: 0.5em;
        }
  `]
})
export class TodosComponent implements OnInit {
  todos: TodoModel[] = [
    {id:1, todo: 'test1', checked: false},
    {id:1, todo: 'second', checked: false},
    {id:1, todo: 'proviamo a vedere', checked: true},
    {id:1, todo: 'Così he succede?', checked: false},
  ]
  selectedTodos: TodoModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
