import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoModel} from "../state/models";
import {TodoEmitModel} from "../state/models/todo.model";

@Component({
  selector: 'mbr-todo-item',
  template: `
    <div *ngIf="todo" class="todo-item flex justify-content-between">
      <div class="todo-list-detail">
        <i class="pi pi-briefcase todo-icon"
           [ngClass]="{'todo-icon-complete': todo.checked, 'todo-icon-todo': !todo.checked}"
        ></i>
        <span class="todo-category">{{todo.todo}}</span>
      </div>
      <div class="todo-list-action">
        <i (click)="comlete.emit({element: todo, event: $event})" [title]="todo.checked ? 'Task complete' : 'Task to do'" class="pi"
           [ngClass]="{'pi-check-circle': todo.checked, 'pi-circle-off': !todo.checked}"
        ></i>
      </div>
    </div>
  `,
  styleUrls: [
    'todo-item.component.scss'
  ]
})
export class TodoItemComponent implements OnInit {
  @Input() todo: TodoModel | null = null;
  @Output() comlete: EventEmitter<TodoEmitModel> = new EventEmitter<TodoEmitModel>();

  constructor() { }

  ngOnInit(): void {
  }

}
