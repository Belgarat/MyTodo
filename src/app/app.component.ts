import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {State} from "./core/state";
import {Store} from "@ngrx/store";
import * as AppState from './core/state';
import * as userActions from './core/state/actions';

@Component({
  selector: 'mbr-root',
  template: `
    <p-menubar [model]="items">
      <ng-template pTemplate="end">
        <img alt="Logo" src="../assets/logo.svg" height="40" class="p-mr-2">
      </ng-template>
    </p-menubar>
    <router-outlet></router-outlet>
    <h1 *ngIf="username">Welcome <strong>{{username}}</strong></h1>
    {{(isLogged$|async)}}
    <button class="p-button p-button-sm" (click)="forceLogin()">Switch login</button>
  `,
  styles: [`
  `]
})
export class AppComponent implements OnInit {
  title = 'MyTodo';
  username = '';
  items: MenuItem[] | [] = [];
  isLogged$ = this.store.select(AppState.selectUserLogged);

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.isLogged$.subscribe(logged => logged ? this.username = 'Marco' : this.username = '');
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
      }
    ];
  }

  forceLogin() {
    this.store.dispatch(userActions.forceLogin());
  }
}
