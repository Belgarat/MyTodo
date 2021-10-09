import { Component, OnInit } from '@angular/core';
import {TodoModel} from "./state/models";
import {TodoEmitModel} from "./state/models/todo.model";

@Component({
  selector: 'mbr-todos',
  template: `
    <div class="content-section implementation">
      <p-card>
        <p-orderList
          controlsPosition="right"
          [value]="todos"
          [listStyle]="{'max-height':'30rem'}"
          [(selection)]="selectedTodos"
          header="Todo list"
          filterBy="todo"
          filterPlaceholder="Filter by todo description"
          [dragdrop]="false"
        >
          <ng-template let-todo pTemplate="item">
            <mbr-todo-item [todo]="todo" (comlete)="setComplete($event)"></mbr-todo-item>
          </ng-template>
        </p-orderList>
        <ng-template pTemplate="content">
          <p-toolbar *ngIf="selectedTodos.length > 0" styleClass="bg-panel">
            <div class="p-toolbar p-toolbar-group-left"></div>
            <div class="p-toolbar p-toolbar-group-right">
              <div class="p-text-secondary mr-2">Azioni</div>
              <p-button *ngIf="selectedTodos.length === 1" icon="pi pi-pencil" styleClass="p-button-success"></p-button>
              <p-button icon="pi pi-times" styleClass="p-button-danger"></p-button>
            </div>
          </p-toolbar>
        </ng-template>
        <ng-template pTemplate="footer">
          <mbr-legend></mbr-legend>
        </ng-template>
      </p-card>
      <mbr-debug-info *isProduction [debugItem]="selectedTodos"></mbr-debug-info>
    </div>
  `,
  styleUrls: ['todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: TodoModel[] = [
    {id:1, todo: 'test1', checked: false},
    {id:2, todo: 'second', checked: false},
    {id:3, todo: 'proviamo a vedere', checked: true},
    {id:4, todo: 'Così he succede?', checked: false},
  ]
  selectedTodos: TodoModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  setComplete(todo: TodoEmitModel): void {
    todo.event.stopPropagation();
    this.todos.map(el => {
      if (el.id === todo.element.id) {
        el.checked = !el.checked
      }
      return el;
    });
  }
}
